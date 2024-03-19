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
    <article className="max-w-[945px] px-[15px] mt-xxl mx-auto sm:p-0 sm:max-w-[640px] md:-mt-xxl">
      <h1 className="text-3xl sm:text-4xl">{post.title}</h1>
      <PostMetadata publishedAt={post.publishedAt} tags={post.tags} />
      <ReactMarkdown
        remarkPlugins={[remarkUnwrapImages, remarkDirective, remarkDirectiveRehype]}
        className="mb-xxl prose"
        components={reactMarkdownComponents}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
