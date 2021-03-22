import React from 'react';
import Sidebar from '@/layouts/DefaultLayout/Sidebar';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar/>
    <main>
      {children}
    </main>
  </div>
);

export default DefaultLayout;
