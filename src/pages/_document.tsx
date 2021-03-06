import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="text-body-text text-body-text-color antialiased font-normal sm:font-medium sm:text-body-text-desktop">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/icon.svg" />
          <link rel="icon" sizes="192x192" href="/icon.png" />
          <link rel="apple-touch-icon" href="/icon.png" />
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
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Igor Gassmann's Blog"
            href="/rss.xml"
          />
          <link
            rel="alternate"
            type="application/atom+xml"
            title="Igor Gassmann's Blog"
            href="/atom.xml"
          />
        </Head>
        <body className="bg-background">
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
