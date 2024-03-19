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
          <Link
            href={previousPagePath}
            rel="prev"
            className="text-xl font-bold text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500"
          >
            ← PREV
          </Link>
        ) : (
          <span className="cursor-not-allowed text-xl font-bold text-fuchsia-900">← PREV</span>
        )}
      </div>
      <div>
        {hasNextPage ? (
          <Link
            href={nextPagePath}
            rel="next"
            className="text-xl font-bold text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500"
          >
            NEXT →
          </Link>
        ) : (
          <span className="cursor-not-allowed text-xl font-bold text-fuchsia-900">NEXT →</span>
        )}
      </div>
    </div>
  );
}
