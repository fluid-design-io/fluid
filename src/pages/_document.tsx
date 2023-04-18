import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

class MyDocument extends Document {
  render() {
    return (
      <Html dir='ltr' lang='en'>
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
          <Script
            id='mode-switch-script'
            dangerouslySetInnerHTML={{ __html: modeScript }}
            strategy='beforeInteractive'
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
