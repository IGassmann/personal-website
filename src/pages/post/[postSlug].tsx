import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type PostType from '@/types/Post';
import SingleColumnLayout from '@/layouts/SingleColumnLayout';
import BlogHomeButton from '@/components/BlogHomeButton';
import Post from '@/components/Post';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

type PostPageProps = {
  origin: string;
  post: PostType;
};

const PostPage: NextPageWithLayout<PostPageProps> = ({ post, origin }) => {
  const router = useRouter();

  const { publishedAt, tags, summary, ogImage, title } = post;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        openGraph={{
          title,
          url: `${origin}${router.asPath}`,
          type: 'article',
          article: {
            publishedTime: publishedAt,
            authors: [`${origin}/about`],
            tags,
          },
          ...(ogImage && {
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
          }),
        }}
      />
      <BlogHomeButton />
      <Post post={post} />
    </>
  );
};

PostPage.Layout = SingleColumnLayout;

export default PostPage;

interface StaticPathParams extends ParsedUrlQuery {
  postSlug: string;
}

export const getStaticProps: GetStaticProps<PostPageProps, StaticPathParams> = async ({
  params,
}) => {
  const {
    default: { origin },
  } = await import('@/site.config');

  const post = getPostBySlug(params!.postSlug);

  return {
    props: {
      post,
      origin,
    },
  };
};

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map((postSlug) => ({
      params: {
        postSlug,
      },
    })),
    fallback: false,
  };
};
