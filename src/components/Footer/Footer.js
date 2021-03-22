import React from 'react';
import Profile from '../Profile';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Profile isInline/>
  </footer>
);

export default Footer;