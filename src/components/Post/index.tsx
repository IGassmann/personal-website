import React from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import markdownRenderers from '@/lib/markdownRenderers';
import PostMetadata from 'components/Post/PostMetadata';

type PostProps = {
  title: string,
  tags: string[],
  publishedAt: string,
  content: string,
}


const Post: React.VFC<PostProps> = ({ title, tags, publishedAt, content }) => (
  <article className="max-w-[945px] px-[15px] mt-xxl mx-auto sm:p-0 sm:max-w-[640px] md:-mt-xxl">
    <h1 className="text-[36px] leading-[48px] sm:text-[48px]">{title}</h1>
    <PostMetadata publishedAt={publishedAt} tags={tags}/>
    {/*@ts-ignore*/}
    <ReactMarkdown plugins={[directive]} className="mb-xxl prose" renderers={markdownRenderers} children={content} />
  </article>
);

export default Post;
