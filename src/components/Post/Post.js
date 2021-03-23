import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import PostMetadata from './PostMetadata'
import styles from './Post.module.scss';

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}

const Post = ({ post }) => (
  <article className={styles.post}>
    <h1 className={styles.title}>{post.title}</h1>
    <PostMetadata publishedAt={post.publishedAt} tags={post.tags}/>
    <ReactMarkdown className={styles.body} renderers={renderers} children={post.content} />
  </article>
);

export default Post;
