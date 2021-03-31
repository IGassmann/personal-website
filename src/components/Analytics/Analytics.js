import React from 'react';
import styles from './Analytics.module.scss';

const Analytics = () => (
  <>
    <iframe plausible-embed
            src="https://plausible.io/share/igassmann.me?auth=d1GNfDh72M25z1HHp8vqF&amp;embed=true&amp;theme=dark&amp;background=transparent"
            loading="lazy"
            className={styles.analytics}/>
    <script async src="https://plausible.io/js/embed.host.js"/>
  </>
);

export default Analytics;