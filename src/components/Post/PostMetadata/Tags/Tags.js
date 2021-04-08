import React from 'react';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => (
  <div>
    <ul className={styles.tagList}>
      {tags && tags.map((tag, index) => (
        <li className={styles.tagListItem} key={index}>#{tag}</li>
      ))}
    </ul>
  </div>
);

export default Tags;
