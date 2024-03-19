import ReactMarkdown from 'react-markdown';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import YoutubePlaylist from '@/components/Post/YoutubePlaylist';
import PostImage from '@/components/Post/PostImage';
import ListItem from '@/components/Post/ListItem';
import FigmaFile from '@/components/Post/FigmaFile';
import Code from '@/components/Post/Code';
import type PostType from '@/types/Post';
import PostMetadata from '@/components/Post/PostMetadata';

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
    <article className="max-w-4xl px-4 mt-8 mx-auto md:p-0 md:max-w-2xl lg:-mt-8">
      <h1 className="text-cyan-500 font-medium text-3xl md:text-4xl">{post.title}</h1>
      <PostMetadata publishedAt={post.publishedAt} tags={post.tags} />
      <ReactMarkdown
        remarkPlugins={[remarkUnwrapImages, remarkDirective, remarkDirectiveRehype]}
        className="mb-8 prose prose-lg prose-invert sm:prose-xl prose-headings:text-cyan-500 prose-headings:font-medium prose-a:no-underline prose-a:text-fuchsia-600 hover:prose-a:text-cyan-500 focus:prose-a:text-cyan-500 prose-strong:text-cyan-500 prose-ul:list-none prose-ul:my-0 sm:prose-ul:my-0 prose-li:my-0 sm:prose-li:my-0 prose-li:leading-7"
        components={reactMarkdownComponents}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
