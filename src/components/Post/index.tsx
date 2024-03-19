import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkUnwrapImages from 'remark-unwrap-images';

import type PostType from '@/types/Post';
import Code from '@/components/Post/Code';
import FigmaFile from '@/components/Post/FigmaFile';
import ListItem from '@/components/Post/ListItem';
import PostImage from '@/components/Post/PostImage';
import PostMetadata from '@/components/Post/PostMetadata';
import YoutubePlaylist from '@/components/Post/YoutubePlaylist';

type PostProps = {
  post: PostType;
};

export default function Post({ post }: PostProps) {
  const reactMarkdownComponents = {
    code: Code,
    'figma-file': FigmaFile,
    'youtube-playlist': YoutubePlaylist,
    img: PostImage,
    li: ListItem,
  };

  return (
    <article className="mx-auto mt-8 max-w-4xl px-4 md:max-w-2xl md:p-0 lg:-mt-8">
      <h1 className="text-3xl font-medium text-cyan-500 md:text-4xl">{post.title}</h1>
      <PostMetadata publishedAt={post.publishedAt} tags={post.tags} />
      <ReactMarkdown
        remarkPlugins={[remarkUnwrapImages, remarkDirective, remarkDirectiveRehype]}
        className="prose prose-lg prose-invert mb-8 sm:prose-xl prose-headings:font-medium prose-headings:text-cyan-500 prose-a:text-fuchsia-600 prose-a:no-underline hover:prose-a:text-cyan-500 focus:prose-a:text-cyan-500 prose-strong:text-cyan-500 prose-ul:my-0 prose-ul:list-none prose-li:my-0 prose-li:leading-7 sm:prose-ul:my-0 sm:prose-li:my-0"
        components={reactMarkdownComponents}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
