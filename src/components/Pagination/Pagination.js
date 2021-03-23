import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({ currentPage, numberOfPages }) => {
  const hasPreviousPage = currentPage !== 0;
  const hasNextPage = currentPage + 1 !== numberOfPages;
  const previousPagePath = currentPage === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPagePath = `/page/${currentPage + 1}`

  return (
    <div className={styles.pagination}>
      <div>
        <Link rel="prev" href={previousPagePath}>
          <a className={cx('link', {disable: !hasPreviousPage})}>← PREV</a>
        </Link>
      </div>
      <div>
        <Link rel="next" href={nextPagePath}>
          <a className={cx('link', {disable: !hasNextPage})}>NEXT →</a>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
