import Post from '@/types/Post';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage, NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BlogHomeButton from '@/components/BlogHomeButton';
import PostMetadata from 'components/Post/PostMetadata';
import SingleColumnLayout from '@/layouts/SingleColumnLayout';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

type PostPageProps = {
  origin: string
  post: Post
}

const PostPage: NextPageWithLayout<PostPageProps> = ({ post, origin }) => {
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
          ...(ogImage && { images: [
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
          ]})
        }}
      />
      <BlogHomeButton />
      <PostMetadata publishedAt={publishedAt} tags={tags} />
    </>
  );
}

PostPage.Layout = SingleColumnLayout;

export default PostPage;

interface StaticPathParams extends ParsedUrlQuery {
  postSlug: string,
}

export const getStaticProps: GetStaticProps<PostPageProps, StaticPathParams> = async ({ params }) => {
  const { default: { origin } } = await import('@/site.config')

  const post = getPostBySlug(params!.postSlug);

  return {
    props: {
      post,
      origin,
    },
  };
}

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map(postSlug => ({
      params: {
        postSlug,
      },
    })),
    fallback: false,
  };
}
