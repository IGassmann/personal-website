// @flow
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link href={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>
              <a>{edge.node.frontmatter.category}</a>
            </Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} href={edge.node.fields.slug}>
            <a>{edge.node.frontmatter.title}</a>
          </Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['feed__item-readmore']} href={edge.node.fields.slug}>
          <a>Read</a>
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
