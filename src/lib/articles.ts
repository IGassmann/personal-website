import { createSource } from 'mdxts';

export type LocalArticle = {
  title: string;
  description?: string;
  author: string;
  date: Date;
  tags?: string[];
  pathname: string;
};

export type ExternalArticle = {
  title: string;
  description?: string;
  author: string;
  date: Date;
  tags?: string[];
  url: string;
};

export type Article = LocalArticle | ExternalArticle;

const externalArticles: ExternalArticle[] = [
  {
    title: 'Migrating from Vite to Next.js',
    description: 'A how-to guide on migrating from Vite to Next.js.',
    author: 'Igor Gassmann',
    date: new Date('2023-07-20'),
    url: 'https://www.inngest.com/blog/migrating-from-vite-to-nextjs',
  },
  {
    title: '5 Lessons Learned From Taking Next.js App Router to Production',
    description:
      'What did we (Inngest) learn from building and shipping our new app with the Next.js 13 App Router?',
    author: 'Igor Gassmann',
    date: new Date('2023-05-05'),
    url: 'https://www.inngest.com/blog/5-lessons-learned-from-taking-next-js-app-router-to-production',
  },
];

type FrontMatter = {
  title: string;
  description?: string;
  author: string;
  date: Date;
  tags?: string[];
};

export const allLocalArticles = createSource<{
  frontMatter: FrontMatter;
}>('../app/articles/content/**/*.mdx', {
  baseDirectory: 'src/app/articles/content',
  basePathname: '/articles',
});

export function getAllArticles(): Article[] {
  const localArticles = allLocalArticles.all().map(({ frontMatter, pathname }) => ({
    pathname,
    ...frontMatter,
  }));

  const allArticles = [...localArticles, ...externalArticles];

  return allArticles.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}
