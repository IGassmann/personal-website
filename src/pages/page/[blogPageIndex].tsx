import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths } from 'next';
import { getAllPostSlugs } from '@/lib/posts';

interface StaticPathParams extends ParsedUrlQuery {
  blogPageIndex: string;
}

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const {
    default: { postsPerPage },
  } = await import('@/site.config');

  const postSlugs = getAllPostSlugs();

  const numberOfPages = Math.ceil(postSlugs.length / postsPerPage);

  const pagePaths = [];
  for (let index = 1; index < numberOfPages; index += 1) {
    pagePaths.push({
      params: { blogPageIndex: index.toString() },
    });
  }

  return { paths: pagePaths, fallback: false };
};

export { default, getStaticProps } from '@/pages';
