import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" sizes="192x192" href="/icon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#000037" />
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
          <script async defer data-domain="igassmann.me" src="https://plausible.io/js/plausible.js"/>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Igor Gassmann's Blog"
            href="/rss.xml"
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
