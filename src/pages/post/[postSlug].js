import { BlogHomeButton } from '@/components/BlogHomeButton/BlogHomeButton';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import React from 'react';

// noinspection JSUnusedGlobalSymbols
export default function PostPage({siteTitle, siteSubtitle, post }) {
  const metaDescription = post.description !== null ? post.description : siteSubtitle;

  return (
    <Layout isSingleColumn title={`${(post.title)} - ${siteTitle}`} description={metaDescription}>
      <BlogHomeButton/>
      <Post post={post} />
    </Layout>
  );
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps({ params: { postSlug } }) {
  const { default: { title, description } } = await import('@/site.config')

  const post = await getPostBySlug(postSlug, [
    'title',
    'description',
    'publishedAt',
    'content',
    'tags',
    'tagSlugs',
    'slug',
  ]);

  return {
    props: {
      siteTitle: title,
      siteSubtitle: description,
      post: post,
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