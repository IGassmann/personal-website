import Link from 'next/link';
import dayjs from 'dayjs';

import type Post from '@/types/Post';

type PostFeedProps = {
  posts: Post[];
};

export default function PostFeed({ posts }: PostFeedProps) {
  return (
    <div className="flex flex-col">
      {posts.map(({ category, publishedAt, summary, slug, title }) => (
        <div className="mb-12" key={slug}>
          <div className="text-sm">
            <time className="mr-2 text-white text-opacity-80" dateTime={publishedAt}>
              {dayjs(publishedAt).format('MMMM YYYY')}
            </time>
            {category && <span>{category}</span>}
          </div>
          <h2 className="m-0 text-2xl font-medium text-cyan-500">
            <Link
              href={`/post/${slug}`}
              prefetch={false}
              className="text-cyan-500 hover:border-b hover:text-cyan-500 focus:border-b focus:text-cyan-500"
            >
              {title}
            </Link>
          </h2>
          {summary && <p className="mt-1">{summary}</p>}
        </div>
      ))}
    </div>
  );
}
