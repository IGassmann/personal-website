import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Article from '@/app/articles/[slug]/Article';
import { allLocalArticles } from '@/lib/articles';

type ArticlePageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await allLocalArticles.get(params.slug);
  if (!article) notFound();
  return {
    title: article.frontMatter.title,
    description: article.frontMatter.description,
  };
}

export function generateStaticParams() {
  return allLocalArticles
    .paths()
    .flat()
    .map((pathname) => {
      return { slug: pathname };
    });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await allLocalArticles.get(params.slug);
  if (!article?.Content) notFound();
  return (
    <Article metadata={article.frontMatter}>
      <article.Content />
    </Article>
  );
}
