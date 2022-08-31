import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html dir='ltr' lang='en-US'>
        <Head>
          <link
            href='/assets/favicon/apple-touch-icon.png'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            href='/assets/favicon/favicon-32x32.png'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/assets/favicon/favicon-16x16.png'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <link href='/manifest.json' rel='manifest' />
          <link
            color='#44403c'
            href='/assets/favicon/safari-pinned-tab.svg'
            rel='mask-icon'
          />
          <meta content='#2b5797' name='msapplication-TileColor' />

          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Nunito:wght@700&display=swap'
            rel='stylesheet'
          />
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
