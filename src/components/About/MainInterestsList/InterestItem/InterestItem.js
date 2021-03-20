import React from 'react';
import styles from './InterestItem.module.scss';

const InterestItem = ({ interest }) => (
  <li>
    - <span className={styles.text} >{`#${interest}`}</span>
  </li>
);

export default InterestItem;