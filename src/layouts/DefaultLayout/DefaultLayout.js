import React from 'react';
import Sidebar from 'components/Sidebar';
import styles from '@/layouts/DefaultLayout/DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar/>
    <main>
      {children}
    </main>
  </div>
);

export default DefaultLayout;
