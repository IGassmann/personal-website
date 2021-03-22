import React from 'react';
import Link from 'next/link';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, numberOfPages }) => {
  const hasPreviousPage = currentPage !== 0;
  const hasNextPage = currentPage + 1 !== numberOfPages;
  const previousPagePath = currentPage === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPagePath = `/page/${currentPage + 1}`

  return (
    <div className={styles.pagination}>
      <div>
        <Link rel="prev" href={previousPagePath}>
          <a className={`${styles.link} ${!hasPreviousPage && styles.disable}`}>← PREV</a>
        </Link>
      </div>
      <div>
        <Link rel="next" href={nextPagePath}>
          <a className={`${styles.link} ${!hasNextPage && styles.disable}`}>NEXT →</a>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
