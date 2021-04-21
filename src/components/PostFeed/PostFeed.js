import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import styles from './PostFeed.module.scss';

const PostFeed = ({ posts }) => (
  <div className={styles.postFeed}>
    {posts.map(({ category, publishedAt, summary, slug, title }) => (
      <div className={styles.postPreview} key={slug}>
        <div className={styles.postMetadata}>
          <time className={styles.postTime} dateTime={publishedAt}>
            {dayjs(publishedAt).format('MMMM YYYY')}
          </time>
          { category && <span>{category}</span>}
        </div>
        <h2 className={styles.postTitle}>
          <Link href={`/post/${slug}`} prefetch={false}>
            <a className={styles.postTitleLink}>{title}</a>
          </Link>
        </h2>
        { summary && <p className={styles.postSummary}>{summary}</p>}
      </div>
    ))}
  </div>
);

export default PostFeed;
