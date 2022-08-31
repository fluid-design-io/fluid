import { CH } from '@code-hike/mdx/components';
import { MDXProvider } from '@mdx-js/react';
import { motion } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import '@docsearch/css';

import '../../styles/code-hike.css';
import '../../styles/globals.css';
import '../../styles/neumorphism.css';
import 'flag-icons/css/flag-icons.min.css';

import { CodeFrame, ExternalLink,getComponents, Table } from '@/components';

import nextI18nextConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
  const activateDarkMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  useEffect(() => {
    activateDarkMode();
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => activateDarkMode());
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
  }, []);
  return (
    <CookiesProvider>
      <MDXProvider
        components={getComponents({
          components: { CH, CodeFrame, motion, Table, ExternalLink },
        })}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </CookiesProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
