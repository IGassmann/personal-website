import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src', 'content', 'posts');

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const date = format(parseISO(data.date), 'MMMM dd, yyyy');

  return { slug: realSlug, frontmatter: { ...data, date }, content };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  return slugs.map((slug) => getPostBySlug(slug));
}