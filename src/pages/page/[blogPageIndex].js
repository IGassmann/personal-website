import React from 'react';
import { getStaticProps } from '@/pages';
import BlogPage from '@/pages';
import { getAllPosts } from '@/lib/posts';

export default BlogPage;
export { getStaticProps }

export async function getStaticPaths() {
  const { default: { postsPerPage } } = await import('@/site.config')

  const posts = getAllPosts(['slug']);

  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  let pagePaths = [];
  for (let index = 1; index < numberOfPages; index++) {
    pagePaths.push({
      params: { blogPageIndex: index.toString() },
    })
  }

  return { paths: pagePaths, fallback: false };
}