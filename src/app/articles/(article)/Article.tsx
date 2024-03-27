import type { Article } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

export default function Article({
  article,
  children,
}: {
  article: Article;
  children: React.ReactNode;
}) {
  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {article.title}
        </h1>
        <time
          dateTime={article.date}
          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{formatDate(article.date)}</span>
        </time>
      </header>
      <div className="prose mt-8 dark:prose-invert" data-mdx-content>
        {' '}
        {children}
      </div>
    </article>
  );
}
