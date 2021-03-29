const { createWriteStream } = require('fs');
const globby = require('globby');
const { SitemapStream } = require('sitemap');
const websiteURLOrigin = require('./websiteURLOrigin.js');
const getAllPostSlugs = require('./getAllPostSlugs.js');

(async () => {
  const sitemap = new SitemapStream({
    hostname: websiteURLOrigin,
    xmlns: { news: false, xhtml: false, image: false, video: false },
  });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  const pagePaths = await globby([
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
})();
