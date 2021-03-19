import Document, {
  Html, Head, Main, NextScript
} from 'next/document';
import React from 'react';
import { useSiteMetadata } from '../hooks';

// noinspection JSUnusedGlobalSymbols
export default class MyDocument extends Document {
  render() {
    const { title, description: description } = useSiteMetadata();

    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#000" />
          <meta property="og:site_name" content={title} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000"/>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}