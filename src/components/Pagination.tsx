import React from 'react';
import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  numberOfPages: number;
};

const Pagination: React.VFC<PaginationProps> = ({ currentPage, numberOfPages }) => {
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = currentPage + 1 < numberOfPages;
  const previousPagePath = currentPage === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPagePath = `/page/${currentPage + 1}`;

  return (
    <div className="flex justify-between">
      <div>
        {hasPreviousPage ? (
          <Link href={previousPagePath}>
            <a rel="prev" className="text-[26px] font-bold">
              ← PREV
            </a>
          </Link>
        ) : (
          <span className="text-[26px] font-bold text-secondary-dark cursor-not-allowed">
            ← PREV
          </span>
        )}
      </div>
      <div>
        {hasNextPage ? (
          <Link href={nextPagePath}>
            <a rel="next" className="text-[26px] font-bold">
              NEXT →
            </a>
          </Link>
        ) : (
          <span className="text-[26px] font-bold text-secondary-dark cursor-not-allowed">
            NEXT →
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
