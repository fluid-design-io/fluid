import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Page from "../../components/framework/Page";
import UnderConstruction from "../../components/framework/UnderConstruction";

function CardPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Card",
  };

  const title = "Card";
  const description =
    "Cards are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples.";
  return (
    <Page meta={meta}>
      <UnderConstruction />
    </Page>
  );
}

export default CardPage;
