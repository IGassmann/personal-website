import kebabCase from 'lodash/kebabCase';
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import styles from 'components/PostFeed/PostFeed.module.scss';

const PostFeed = ({ posts }) => (
  <div className={styles.postFeed}>
    {posts.map(({ category, publishedAt, description, slug, title }) => (
      <div className={styles.postPreview} key={slug}>
        <div className={styles.postMetadata}>
          <time className={styles.postTime} dateTime={moment(publishedAt).format('MMMM D, YYYY')}>
            {moment(publishedAt).format('MMMM YYYY')}
          </time>
          { category &&
            <Link href={`/category/${kebabCase(category)}`}>
              <a>{category}</a>
            </Link>
          }
        </div>
        <h2 className={styles.postTitle}>
          <Link href={`/post/${slug}`}>
            <a className={styles.postTitleLink} >{title}</a>
          </Link>
        </h2>
        { description &&
          <p className={styles.postDescription}>{description}</p>
        }
      </div>
    ))}
  </div>
);

export default PostFeed;
