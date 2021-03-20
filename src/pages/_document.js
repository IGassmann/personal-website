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
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="icon" type="image/x-icon" sizes="16x16 32x32" href="/favicons/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/favicons/favicon-192.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180-precomposed.png" />
          <meta name="msapplication-TileColor" content="#190950" />
          <meta name="msapplication-TileImage" content="/favicons/favicon-114-precomposed.png" />
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
