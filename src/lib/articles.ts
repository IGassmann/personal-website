import glob from 'fast-glob';

export type LocalArticle = {
  title: string;
  description?: string;
  author: string;
  date: string;
  tags?: string[];
  slug: string;
};

export type ExternalArticle = {
  title: string;
  description?: string;
  author: string;
  date: string;
  tags?: string[];
  url: string;
};

export type Article = LocalArticle | ExternalArticle;

const externalArticles: ExternalArticle[] = [
  {
    title: 'Migrating from Vite to Next.js',
    description: 'A how-to guide on migrating from Vite to Next.js.',
    author: 'Igor Gassmann',
    date: '2023-07-20',
    url: 'https://www.inngest.com/blog/migrating-from-vite-to-nextjs',
  },
  {
    title: '5 Lessons Learned From Taking Next.js App Router to Production',
    description:
      'What did we (Inngest) learn from building and shipping our new app with the Next.js 13 App Router?',
    author: 'Igor Gassmann',
    date: '2023-05-05',
    url: 'https://www.inngest.com/blog/5-lessons-learned-from-taking-next-js-app-router-to-production',
  },
];

async function importArticle(articleFilename: string): Promise<LocalArticle> {
  const { article } = (await import(`@/app/articles/(article)/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles/(article)',
  });

  const localArticles = await Promise.all(articleFilenames.map(importArticle));

  const allArticles = [...localArticles, ...externalArticles];

  return allArticles.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}
