import React from 'react';
import Footer from 'components/Footer/Footer';
import styles from './SingleColumnLayout.module.scss';

const SingleColumnLayout = ({ children }) => (
  <div className={styles.layout}>
    <main>
      {children}
    </main>
    <Footer/>
  </div>
);

export default SingleColumnLayout;
