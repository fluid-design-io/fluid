import Page from "../../components/framework/Page";
import UnderConstruction from "../../components/framework/UnderConstruction";
import { SiteMeta } from "../../interfaces/framwork";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}

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
