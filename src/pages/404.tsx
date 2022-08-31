import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Page } from '../components/framework';
import UnderConstruction from '../components/framework/UnderConstruction';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar'])),
      // Will be passed to the page component as props
    },
  };
}

function ErrorPage() {
  const meta: SiteMeta = {
    title: 'Fluid Design | Error',
  };
  return (
    <Page meta={meta}>
      <UnderConstruction />
    </Page>
  );
}

export default ErrorPage;
