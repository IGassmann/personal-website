import React from 'react';
import Link from 'next/link';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => (
  <div className={styles.tags}>
    <ul className={styles['tags__list']}>
      {tags && tags.map((tag, index) => (
        <li className={styles['tags__list-item']} key={tags[index]}>
          <Link href={`/tag/${tag}`}>
            <a className={styles['tags__list-item-link']}>#{tags[index]}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
