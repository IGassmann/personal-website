import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, numberOfPages }) => {
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = currentPage + 1 < numberOfPages;
  const previousPagePath = currentPage === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPagePath = `/page/${currentPage + 1}`

  return (
    <div className="flex justify-between">
      <div>
        {hasPreviousPage ?
          <Link rel="prev" href={previousPagePath}>
            <a className="text-[26px] font-bold">← PREV</a>
          </Link>
          :
          <span className="text-[26px] font-bold text-secondary-dark cursor-not-allowed">← PREV</span>
        }
      </div>
      <div>
        {hasNextPage ?
          <Link rel="next" href={nextPagePath}>
            <a className="text-[26px] font-bold">NEXT →</a>
          </Link>
          :
          <span className="text-[26px] font-bold text-secondary-dark cursor-not-allowed">NEXT →</span>
        }
      </div>
    </div>
  );
};

export default Pagination;
