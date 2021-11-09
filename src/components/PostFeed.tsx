import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import Post from '@/types/Post'

type PostFeedProps = {
  posts: Post[]
}

const PostFeed: React.VFC<PostFeedProps> = ({ posts }) => (
  <div className="flex flex-col">
    {posts.map(({ category, publishedAt, summary, slug, title }) => (
      <div className="mb-xxxl" key={slug}>
        <div className="text-[18px]">
          <time className="mr-m text-body-text-color text-opacity-80" dateTime={publishedAt}>
            {dayjs(publishedAt).format('MMMM YYYY')}
          </time>
          {category && <span>{category}</span>}
        </div>
        <h2 className="m-0">
          <Link href={`/post/${slug}`} prefetch={false}>
            <a className="text-primary hover:border-b focus:border-b">{title}</a>
          </Link>
        </h2>
        {summary && <p className="mt-s">{summary}</p>}
      </div>
    ))}
  </div>
)

export default PostFeed
