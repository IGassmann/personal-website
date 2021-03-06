import { createWriteStream } from 'fs';
import globby from 'globby';
import { SitemapStream } from 'sitemap';
import siteConfig from '../src/site.config'
import { getAllPostSlugs } from '../src/lib/posts'

const sitemap = new SitemapStream({
  hostname: siteConfig.origin,
  xmlns: { news: false, xhtml: false, image: false, video: false },
});

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

const pagePaths = globby.sync([
  'src/pages/**/*.js',
  '!src/pages/_*.js',
  '!src/pages/**/\\[*\\].js',
  '!src/pages/api',
]);

pagePaths.forEach((pagePath) => {
  const path = pagePath.replace('src/pages', '').replace('.js', '');
  const pageURL = path === '/index' ? '' : path;

  sitemap.write({
    url: pageURL,
  });
});

const postSlugs = getAllPostSlugs();

postSlugs.forEach((postSlug) => {
  sitemap.write({
    url: `post/${postSlug}`,
  });
});

sitemap.end();
