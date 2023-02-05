import { FluidProvider } from '@fluid-design/fluid-ui';
import { Router } from 'next/router';
import '@docsearch/css';

import 'flag-icons/css/flag-icons.min.css';
import '../../styles/code-hike.css';
import '../../styles/globals.css';

import { ThemeProvider } from '@/lib/ThemeContext';

import { useMobileNavigationStore } from '@/components/framework/MobileNavigation';

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on('hashChangeStart', onRouteChange);
Router.events.on('routeChangeComplete', onRouteChange);
Router.events.on('routeChangeError', onRouteChange);

export default function MyApp({ Component, pageProps }) {
  return (
    <FluidProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </FluidProvider>
  );
}
