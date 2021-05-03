import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Pagination from '@/components/Pagination';
import PostFeed from '@/components/PostFeed';
import { getAllPosts } from '@/lib/posts';

const BlogPage = ({ posts, currentPage, numberOfPages, origin }) => {
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
      <PostFeed posts={posts} />
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </>
  );
}

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageIndexParam = params?.blogPageIndex;
  const pageIndex = Number(pageIndexParam || '0')

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