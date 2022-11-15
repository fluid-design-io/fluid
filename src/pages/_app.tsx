import '@docsearch/css';
import 'flag-icons/css/flag-icons.min.css';
import { appWithTranslation } from 'next-i18next';
import { CookiesProvider } from 'react-cookie';

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
