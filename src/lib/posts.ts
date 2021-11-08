import Post from '@/types/Post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

type PostMetadata = {
  title?: string
  publishedAt?: string
  summary?: string
  category?: string
  tags?: string[]
  ogImage?: string
}

type ValidPostMetadata = {
  title: string
  publishedAt: string
  summary?: string
  category?: string
  tags?: string[]
  ogImage?: string
}

const postsDirectory = join(process.cwd(), 'src', 'content', 'posts');

const hasAllRequiredMetadata = (postMetadata: Record<string, unknown>): postMetadata is ValidPostMetadata => {
  const requiredKeys = ['title', 'publishedAt'];
  return requiredKeys.every(key => Object.keys(postMetadata).includes(key))
};

export const getAllPostSlugs = (): string[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
};

export const getPostBySlug = (slug: string): Post => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const parsedFile = matter(file);
  const postMetadata: PostMetadata = parsedFile.data;
  const content = parsedFile.content;

  if (!hasAllRequiredMetadata(postMetadata)) throw new TypeError('Missing post metadata')

  return {
    ...postMetadata,
    slug,
    content,
  }
};

export const getAllPosts = (): Post[] => {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by publishedAt in descending order
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
};
