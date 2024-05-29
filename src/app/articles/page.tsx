import { type Metadata } from 'next';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles, type Article } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function Article({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={'pathname' in article ? article.pathname : article.url}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date.toISOString()}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date.toISOString()}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default function ArticlesIndex() {
  const articles = getAllArticles();

  return (
    <SimpleLayout
      title="Writing on software, startups, and my life experiences"
      intro="All of my long-form thoughts on software, startups, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article
              key={'pathname' in article ? article.pathname : article.url}
              article={article}
            />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
