import dayjs from 'dayjs';
import React from 'react';
import Tags from '../Tags';
import styles from './PostMetadata.module.scss';

const PostMetadata = ({ publishedAt, tags }) => (
  <div className={styles.postMetadata}>
    <p className={styles.publishedDate}>{dayjs(publishedAt).format('D MMM YYYY')}</p>
    {tags && <Tags tags={tags} />}
  </div>
);

export default PostMetadata;
