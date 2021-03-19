import { BlogHomeButton } from '@/components/BlogHomeButton/BlogHomeButton';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

// noinspection JSUnusedGlobalSymbols
export default function PostPage({ post, origin }) {
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
      <Layout isSingleColumn>
        <BlogHomeButton/>
        <Post post={post} />
      </Layout>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
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

// noinspection JSUnusedGlobalSymbols
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