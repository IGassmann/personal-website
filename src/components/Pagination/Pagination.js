import React from 'react';
import Link from 'next/link';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, numberOfPages }) => {
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = currentPage + 1 < numberOfPages;
  const previousPagePath = currentPage === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPagePath = `/page/${currentPage + 1}`

  return (
    <div className={styles.pagination}>
      <div>
        {hasPreviousPage ?
          <Link rel="prev" href={previousPagePath}>
            <a className={styles.link}>← PREV</a>
          </Link>
          :
          <span className={`${styles.link} ${styles.disable}`}>← PREV</span>
        }
      </div>
      <div>
        {hasNextPage ?
          <Link rel="next" href={nextPagePath}>
            <a className={styles.link}>NEXT →</a>
          </Link>
          :
          <span className={`${styles.link} ${styles.disable}`}>NEXT →</span>
        }
      </div>
    </div>
  );
};

export default Pagination;
