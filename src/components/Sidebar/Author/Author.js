// @flow
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link href="/">
      <a>
        <Image
          src={author.photo}
          className={styles['author__photo']}
          width={75}
          height={75}
          alt={author.name}
        />
      </a>
    </Link>

    { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} href="/">
          <a>{author.name}</a>
        </Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} href="/">
          <a>{author.name}</a>
        </Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
