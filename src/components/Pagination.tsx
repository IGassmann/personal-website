import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  numberOfPages: number;
};

export default function Pagination({ currentPage, numberOfPages }: PaginationProps) {
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = currentPage + 1 < numberOfPages;
  const previousPagePath = currentPage === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPagePath = `/page/${currentPage + 1}`;

  return (
    <div className="flex justify-between">
      <div>
        {hasPreviousPage ? (
          <Link href={previousPagePath} rel="prev" className="text-[26px] font-bold">
            ← PREV
          </Link>
        ) : (
          <span className="text-[26px] font-bold text-secondary-dark cursor-not-allowed">
            ← PREV
          </span>
        )}
      </div>
      <div>
        {hasNextPage ? (
          <Link href={nextPagePath} rel="next" className="text-[26px] font-bold">
            NEXT →
          </Link>
        ) : (
          <span className="text-[26px] font-bold text-secondary-dark cursor-not-allowed">
            NEXT →
          </span>
        )}
      </div>
    </div>
  );
}
