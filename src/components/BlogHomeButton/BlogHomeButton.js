import Link from 'next/link';
import React from 'react';
import styles from './BlogHomeButton.module.scss';

export function BlogHomeButton() {
  return (
    <Link href="/blog">
      <a className={styles.blogHomeButton}>All Posts</a>
    </Link>
  );
}