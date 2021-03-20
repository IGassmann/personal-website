import siteConfig from '@/site.config';

const generateRSSItem = (post) => `
  <item>
    <guid>${siteConfig.origin}/post/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${siteConfig.origin}/post/${post.slug}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
  </item>
`;

const generateRSS = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${siteConfig.defaultTitle}</title>
      <link>${siteConfig.origin}</link>
      <description>${siteConfig.description}.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].publishedAt).toUTCString()}</lastBuildDate>
      <atom:link href="${siteConfig.origin}/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRSSItem).join('')}
    </channel>
  </rss>
`;

export default generateRSS;