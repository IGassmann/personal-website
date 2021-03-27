import React from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import markdownRenderers from '@/lib/markdownRenderers';
import PostMetadata from './PostMetadata';
import styles from './Post.module.scss';

const Post = ({ post }) => (
  <article className={styles.post}>
    <h1 className={styles.title}>{post.title}</h1>
    <PostMetadata publishedAt={post.publishedAt} tags={post.tags}/>
    <ReactMarkdown plugins={[directive]} className={styles.body} renderers={markdownRenderers} children={post.content} />
  </article>
);

export default Post;
