import BlogHomeButton from '@/components/BlogHomeButton';
import Post from '@/components/Post';
import SingleColumnLayout from '@/layouts/SingleColumnLayout';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

const PostPage = ({ post, origin }) => {
  const router = useRouter()

  const {
    publishedAt,
    tags,
    summary,
    ogImage,
    title
  } = post;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        openGraph={{
          title: title,
          url: `${origin}${router.asPath}`,
          type: 'article',
          article: {
            publishedTime: publishedAt,
            authors: [`${origin}/about`],
            tags: tags,
          },
          images: [
            {
              url: `${origin}${ogImage}`,
              width: 1200,
              height: 630,
              alt: title,
            },
            {
              url: `${origin}${ogImage}`,
              width: 1200,
              height: 600,
              alt: title,
            },
          ],
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
    'ogImage',
    'publishedAt',
    'content',
    'tags',
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
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map(postSlug => ({
      params: {
        postSlug: postSlug,
      },
    })),
    fallback: false,
  };
}