import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html dir='ltr' lang='en-US'>
        <Head>
          <link
            as='font'
            crossOrigin='anonymous'
            href='/fonts/inter-var-latin.woff2'
            rel='preload'
            type='font/woff2'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href='/fonts/nunito-latin.woff2'
            rel='preload'
            type='font/woff2'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
