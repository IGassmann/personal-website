import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar';
import styles from './Layout.module.scss';

const Layout = ({ children, isSingleColumn, isIndex, pageTitle, pageDescription }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:site_name" content={pageTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
    </Head>
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
  </>
);

export default Layout;
