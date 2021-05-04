import { Feed } from "feed";
import fs from 'fs';
import unified from 'unified';
import markdown from 'remark-parse';
import siteConfig from '../src/site.config';
import remark2rehype from 'remark-rehype';
import rehypeTruncate from 'rehype-truncate';
import urls from 'rehype-urls';
import format from 'rehype-format';
import html from 'rehype-stringify';
import { getAllPosts } from '../src/lib/posts';

const posts = getAllPosts([
  'title',
  'summary',
  'ogImage',
  'publishedAt',
  'content',
  'tags',
  'slug',
  'content',
]);

const { openGraph, syndicationFeed, profile, origin, defaultTitle } = siteConfig;

const feed = new Feed({
  title: syndicationFeed.title,
  description: syndicationFeed.description,
  id: `${origin}/`,
  link: `${origin}/`,
  language: 'en',
  image: openGraph.images[0].url,
  favicon: `${origin}/icon.png`,
  copyright: 'Unlicense',
  updated: new Date(posts[0].publishedAt),
  author: {
    name: profile.name,
    email: profile.socialLinks.email,
    link: `${origin}/`,
  },
  feedLinks: {
    rss: `${origin}/rss.xml`,
    atom: `${origin}/atom.xml`,
  },
});

const relativeToAbsolute = url => {
  if (url.host === null) return `${origin}${url.path}?source=Syndication+Feed`
};

const buildKeepReadingCTA = (postURL) => `
<div style="margin-top: 50px; font-style: italic;">
  <strong><a href="${postURL}">Keep reading</a></strong>
  <br/><br/>
</div>`

const markdownProcessor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehypeTruncate, { maxChars: 250, ignoreTags: ['ul', 'h1', 'h2'] })
  .use(urls, relativeToAbsolute)
  .use(format)
  .use(html);

posts.forEach(({ content, ogImage, publishedAt, slug, summary, tags, title }) => {

  const postURL = `${origin}/post/${slug}`;
  const trackedPostURL = `${postURL}?source=Syndication+Feed`;
  const keepReadingCTA = buildKeepReadingCTA(trackedPostURL)
  const itemContent = markdownProcessor.processSync(content).toString().concat(keepReadingCTA)

  feed.addItem({
    title: title,
    link: trackedPostURL,
    id: postURL,
    description: summary,
    content: itemContent,
    date: new Date(publishedAt),
    ...(tags && { category: tags.map(tag => ({ name: tag, term: tag }))}),
    ...(ogImage && { image: `${origin}${ogImage}` }),
    author: [{
        name: profile.name,
        email: profile.socialLinks.email,
        link: `${origin}/`,
    }],
  });
});

const rssFeed = feed.rss2();
const atomFeed = feed.atom1();

fs.writeFileSync('./public/rss.xml', rssFeed);
fs.writeFileSync('./public/atom.xml', atomFeed);
