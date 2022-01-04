import Page from "../../components/framework/Page";
import UnderConstruction from "../../components/framework/UnderConstruction";
import { SiteMeta } from "../../interfaces/framwork";

function ExamplesPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Examples",
  };
  return (
    <Page meta={meta}>
      <UnderConstruction />
    </Page>
  );
}

export default ExamplesPage;
