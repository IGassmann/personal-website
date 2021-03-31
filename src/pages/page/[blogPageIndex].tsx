import React from 'react';
import { GetStaticPaths } from 'next';
import { getAllPosts } from '@/lib/posts';
export * from '@/pages';

export const getStaticPaths: GetStaticPaths = async () => {
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