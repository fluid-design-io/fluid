import { Page } from '../components/framework';
import UnderConstruction from '../components/framework/UnderConstruction';

function ErrorPage() {
  const meta = {
    title: 'Fluid Design | Error',
  };
  return (
    <Page meta={meta}>
      <UnderConstruction />
    </Page>
  );
}

export default ErrorPage;
