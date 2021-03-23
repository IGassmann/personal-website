import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
          <link rel="icon" type="image/x-icon" sizes="16x16 32x32" href="/images/favicons/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/images/favicons/favicon-192.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/favicon-180-precomposed.png" />
          <meta name="msapplication-TileColor" content="#190950" />
          <meta name="msapplication-TileImage" content="/images/favicons/favicon-114-precomposed.png" />
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS feed for blog posts"
            href="/rss.xml"
          />
          <link
            rel="preload"
            href="/fonts/BlenderPro/BlenderPro-Book.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BlenderPro/BlenderPro-Book.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BlenderPro/BlenderPro-Medium.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BlenderPro/BlenderPro-Medium.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BlenderPro/BlenderPro-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BlenderPro/BlenderPro-Bold.woff"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
