import Page from "../components/framework/Page";
import UnderConstruction from "../components/framework/UnderConstruction";
import { SiteMeta } from "../interfaces/framwork";

function ErrorPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Error",
  };
  return (
    <Page meta={meta}>
      <UnderConstruction />
    </Page>
  );
}

export default ErrorPage;
