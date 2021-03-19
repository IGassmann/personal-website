import PostFeed from '@/components/PostFeed';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { getAllPosts } from '@/lib/api';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

export default function BlogPagePage({ posts, currentPage, numberOfPages, origin }) {
  const router = useRouter()
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage}` : '';

  return (
    <>
      <NextSeo
        title={pageTitle}
        openGraph={{
          title: pageTitle,
          url: `${origin}${router.asPath}`,
        }}
      />
      <Layout isIndex>
        <PostFeed posts={posts} />
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const pageIndexParam = params?.blogPageIndex;
  const pageIndex = parseInt(pageIndexParam || '0')

  const { default: { postsPerPage, origin } } = await import('@/site.config')

  const posts = getAllPosts([
    'title',
    'summary',
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
      posts: paginatedPosts,
      currentPage: pageIndex,
      numberOfPages,
      origin,
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