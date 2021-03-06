import Page from "../components/framework/Page";
import UnderConstruction from "../components/framework/UnderConstruction";
import { SiteMeta } from "../interfaces/framwork";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}

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
