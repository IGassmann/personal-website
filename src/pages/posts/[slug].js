import React from 'react';
import remark from 'remark';
import html from 'remark-html';
import { getAllPosts, getPostBySlug } from '../../lib/blog';
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import { useSiteMetadata } from '../../hooks';
import type { MarkdownRemark } from '../../types';

type Props = {
  data: MarkdownRemark
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { title: postTitle, description: postDescription } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const markdown = await remark()
    .use(html)
    .process(post.content || '');
  const content = markdown.toString();

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}


export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
      }
    }
  }
`;


export default PostTemplate;
