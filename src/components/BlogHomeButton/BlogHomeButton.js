import React from 'react';
import Link from 'next/link';
import styles from './BlogHomeButton.module.scss';

const BlogHomeButton = () => {
  return (
    <Link href="/">
      <a className={styles.blogHomeButton}>All Posts</a>
    </Link>
  );
}

export default BlogHomeButton;