import { CH } from '@code-hike/mdx/components';
import '@docsearch/css';
import { MDXProvider } from '@mdx-js/react';
import 'flag-icons/css/flag-icons.min.css';
import { motion } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import { CookiesProvider } from 'react-cookie';

import { CodeFrame, ExternalLink, Table, getComponents } from '@/components';
import { ThemeProvider } from '@/lib/ThemeContext';

import nextI18nextConfig from '../../next-i18next.config';
import '../../styles/code-hike.css';
import '../../styles/globals.css';
import '../../styles/neumorphism.css';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
