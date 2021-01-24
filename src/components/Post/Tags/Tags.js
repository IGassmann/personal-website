// @flow
import React from 'react';
import Link from 'next/link';
import styles from './Tags.module.scss';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className={styles['tags__list-item']} key={tags[i]}>
          <Link href={slug} className={styles['tags__list-item-link']}>
            <a>{tags[i]}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
