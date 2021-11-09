import React from 'react'
import dayjs from 'dayjs'
import Tags from 'components/Post/Tags'

type PostMetadataProps = {
  publishedAt: string
  tags?: string[]
}

const PostMetadata: React.VFC<PostMetadataProps> = ({ publishedAt, tags }) => (
  <div className="flex flex-wrap place-content-between mt-l mb-xxl">
    <time className="mr-l pt-l text-body-text-color text-opacity-80" dateTime={publishedAt}>
      {dayjs(publishedAt).format('D MMM YYYY')}
    </time>
    {tags && <Tags tags={tags} />}
  </div>
)

export default PostMetadata
