import '@docsearch/css';
import 'flag-icons/css/flag-icons.min.css';
import { appWithTranslation } from 'next-i18next';
import { Router } from 'next/router';

import { useMobileNavigationStore } from '@/components/framework/MobileNavigation';
import { ThemeProvider } from '@/lib/ThemeContext';

import nextI18nextConfig from '../../next-i18next.config';
import '../../styles/code-hike.css';
import '../../styles/globals.css';

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on('hashChangeStart', onRouteChange);
Router.events.on('routeChangeComplete', onRouteChange);
Router.events.on('routeChangeError', onRouteChange);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
