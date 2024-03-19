import dayjs from 'dayjs';
import Link from 'next/link';
import type Post from '@/types/Post';

type PostFeedProps = {
  posts: Post[];
};

export default function PostFeed({ posts }: PostFeedProps) {
  return (
    <div className="flex flex-col">
      {posts.map(({ category, publishedAt, summary, slug, title }) => (
        <div className="mb-xxxl" key={slug}>
          <div className="text-[18px]">
            <time className="mr-m text-white text-opacity-80" dateTime={publishedAt}>
              {dayjs(publishedAt).format('MMMM YYYY')}
            </time>
            {category && <span>{category}</span>}
          </div>
          <h2 className="m-0">
            <Link
              href={`/post/${slug}`}
              prefetch={false}
              className="text-cyan-500 hover:border-b focus:border-b"
            >
              {title}
            </Link>
          </h2>
          {summary && <p className="mt-s">{summary}</p>}
        </div>
      ))}
    </div>
  );
}
