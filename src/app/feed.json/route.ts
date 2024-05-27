import assert from 'node:assert';
import * as cheerio from 'cheerio';
import { Feed } from 'feed';

import { getAllArticles } from '@/lib/articles';

export async function GET(request: Request) {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteURL) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable');
  }

  const author = {
    name: 'Igor Gassmann',
    email: 'igor@igassmann.me',
  };

  const feed = new Feed({
    title: `${author.name}’s Articles`,
    description: 'The latest articles from Igor Gassmann',
    author,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/icon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      json: `${siteURL}/feed.json`,
    },
  });

  const allArticles = getAllArticles();

  for (const article of allArticles) {
    const isExternalArticle = 'url' in article;
    if (isExternalArticle) {
      feed.addItem({
        id: article.url,
        title: article.title,
        link: article.url,
        author: [author],
        date: article.date,
      });
      continue;
    }

    const articleURL = String(new URL(article.pathname, request.url));
    const html = await (await fetch(articleURL)).text();
    const $ = cheerio.load(html);

    const publicURL = `${siteURL}/articles/${article}`;
    const articleElement = $('article').first();
    const title = articleElement.find('h1').first().text();
    const date = articleElement.find('time').first().attr('datetime');
    const content = articleElement.find('[data-mdx-content]').first();
    const sanitizedContent = transformRelativeURLsToAbsolute(content, siteURL).html();

    assert(typeof date === 'string', `date ${date} of ${title} is not a string`);
    assert(typeof sanitizedContent === 'string', `content of ${title} is not a string`);

    feed.addItem({
      id: publicURL,
      title,
      link: publicURL,
      author: [author],
      date: new Date(date),
      content: sanitizedContent,
    });
  }

  feed.items.sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return new Response(feed.json1(), {
    status: 200,
    headers: {
      'content-type': 'application/feed+json',
      'cache-control': 's-maxage=31556952',
    },
  });
}

function transformRelativeURLsToAbsolute(
  content: cheerio.Cheerio<cheerio.Element>,
  baseURL: string,
) {
  content.find('[href], [src]').each((_, element) => {
    const href = element.attribs['href'];
    if (href) {
      element.attribs['href'] = new URL(href, baseURL).href;
    }

    const src = element.attribs['src'];
    if (src) {
      element.attribs['src'] = new URL(src, baseURL).href;
    }

    const srcset = element.attribs['srcset'];
    if (srcset) {
      element.attribs['srcset'] = srcset
        .split(',')
        .map((src) => {
          const [url, descriptor] = src.trim().split(' ');
          if (!url) return src;
          return `${new URL(url, baseURL).href} ${descriptor}`;
        })
        .join(', ');
    }
  });

  return content;
}
