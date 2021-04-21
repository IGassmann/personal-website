import React from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import markdownComponents from '@/lib/markdownComponents';
import PostMetadata from './PostMetadata';
import styles from './Post.module.scss';

const Post = ({ post }) => (
  <article className={styles.post}>
    <h1 className={styles.title}>{post.title}</h1>
    <PostMetadata publishedAt={post.publishedAt} tags={post.tags}/>
    <ReactMarkdown plugins={[directive]} className={styles.body} components={markdownComponents}>
      {post.content}
    </ReactMarkdown>
  </article>
);

export default Post;
