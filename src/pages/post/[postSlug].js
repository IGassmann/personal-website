import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SingleColumnLayout from '@/layouts/SingleColumnLayout';
import BlogHomeButton from '@/components/BlogHomeButton';
import Post from '@/components/Post';
import { getAllPosts, getPostBySlug } from '@/lib/api';

const PostPage = ({ post, origin }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.summary}
        openGraph={{
          title: post.title,
          url: `${origin}${router.asPath}`,
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            authors: [`${origin}/about`],
            tags: post.tags,
          }
        }}
      />
      <BlogHomeButton />
      <Post post={post} />
    </>
  );
}

PostPage.Layout = SingleColumnLayout;

export default PostPage;

export async function getStaticProps({ params: { postSlug } }) {
  const { default: { origin } } = await import('@/site.config')

  const post = await getPostBySlug(postSlug, [
    'title',
    'summary',
    'coverImage',
    'publishedAt',
    'content',
    'tags',
    'tagSlugs',
    'slug',
  ]);

  return {
    props: {
      post: post,
      origin,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(({ slug }) => ({
      params: {
        postSlug: slug,
      },
    })),
    fallback: false,
  };
}