import React from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import markdownRenderers from '@/lib/markdownRenderers';
import PostMetadata from './PostMetadata';

const Post = ({ post }) => (
  <article className="max-w-[945px] px-[15px] mt-xxl mx-auto sm:p-0 sm:max-w-[640px] md:-mt-xxl">
    <h1 className="text-[36px] leading-[48px] sm:text-[48px]">{post.title}</h1>
    <PostMetadata publishedAt={post.publishedAt} tags={post.tags}/>
    <ReactMarkdown plugins={[directive]} className="mb-xxl prose" renderers={markdownRenderers} children={post.content} />
  </article>
);

export default Post;
