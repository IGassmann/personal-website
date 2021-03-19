import React from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar';
import styles from './Layout.module.scss';

const Layout = ({ children, isSingleColumn, isIndex }) => (
  <div className={styles.layout}>
    { isSingleColumn ? (
        <main>
          {children}
          <Footer/>
        </main>
      ) : (
        <>
          <Sidebar isIndex={isIndex} />
          <main>
            {children}
          </main>
        </>
      )
    }
  </div>
);

export default Layout;
