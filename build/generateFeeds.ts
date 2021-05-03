import { Feed } from "feed";
import fs from 'fs';
import { getAllPosts } from '../src/lib/posts';
import siteConfig from '../src/site.config';

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
  generator: defaultTitle,
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

posts.forEach(({ content, ogImage, publishedAt, slug, summary, tags, title }) => {
  feed.addItem({
    title: title,
    link: `${origin}/post/${slug}`,
    description: summary,
    content: content,
    date: new Date(publishedAt),
    ...(tags && { category: tags.map(tag => ({ name: tag }))}),
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
