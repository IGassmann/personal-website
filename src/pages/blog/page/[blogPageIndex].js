import PostFeed from '@/components/PostFeed';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { getAllPosts } from '@/lib/api';
import React from 'react';

export default function BlogPagePage({ siteTitle, siteSubtitle, posts, currentPage, numberOfPages }) {
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : `Blog - ${siteTitle}`;

  return (
    <Layout pageTitle={pageTitle} pageDescription={siteSubtitle} isIndex>
      <PostFeed posts={posts} />
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const pageIndexParam = params?.blogPageIndex;
  const pageIndex = parseInt(pageIndexParam || '0')

  const { default: { title, description, postsPerPage } } = await import('@/site.config')

  const posts = getAllPosts([
    'title',
    'description',
    'category',
    'publishedAt',
    'slug',
  ]);

  // For pagination and ordering
  const numberOfPages = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = posts.slice(
    pageIndex * postsPerPage,
    (pageIndex + 1) * postsPerPage
  )

  return {
    props: {
      siteTitle: title,
      siteSubtitle: description,
      posts: paginatedPosts,
      currentPage: pageIndex,
      numberOfPages,
    },
  };
}

// noinspection JSUnusedGlobalSymbols
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