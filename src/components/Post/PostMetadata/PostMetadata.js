import React from 'react';
import dayjs from 'dayjs';
import Tags from './Tags';
import styles from './PostMetadata.module.scss';

const PostMetadata = ({ publishedAt, tags }) => (
  <div className={styles.postMetadata}>
    <time className={styles.publishedDate} dateTime={publishedAt}>
      {dayjs(publishedAt).format('D MMM YYYY')}
    </time>
    {tags && <Tags tags={tags} />}
  </div>
);

export default PostMetadata;
