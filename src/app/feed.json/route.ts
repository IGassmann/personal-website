import assert from 'node:assert';
import * as cheerio from 'cheerio';
import { Feed } from 'feed';

export const dynamic = 'force-static';

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

  const articleIDs = require
    .context('../articles/(article)', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''));

  for (const id of articleIDs) {
    const url = String(new URL(`/articles/${id}`, request.url));
    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);

    const publicURL = `${siteURL}/articles/${id}`;
    const article = $('article').first();
    const title = article.find('h1').first().text();
    const date = article.find('time').first().attr('datetime');
    const content = article.find('[data-mdx-content]').first();
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
