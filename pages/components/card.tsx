import Page from "../../components/framework/Page";
import UnderConstruction from "../../components/framework/UnderConstruction";
import { SiteMeta } from "../../interfaces/framwork";

function CardPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Card",
  };
  return (
    <Page meta={meta}>
      <UnderConstruction />
    </Page>
  );
}

export default CardPage;
