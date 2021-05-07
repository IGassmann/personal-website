import React from 'react';
import dayjs from 'dayjs';
import Tags from './Tags';

const PostMetadata = ({ publishedAt, tags }) => (
  <div className="flex flex-wrap place-content-between mt-l mb-xxl">
    <time className="mr-l pt-l text-body-text text-opacity-80" dateTime={publishedAt}>
      {dayjs(publishedAt).format('D MMM YYYY')}
    </time>
    {tags && <Tags tags={tags} />}
  </div>
);

export default PostMetadata;
