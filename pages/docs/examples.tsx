import Page from "../../components/framework/Page";
import UnderConstruction from "../../components/framework/UnderConstruction";
import { SiteMeta } from "../../interfaces/framwork";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CardStandard } from "../../components/card";
import { ImageGrid } from "../../components/image";
import { ImageCollageComponent } from "../../components/image/Collage";
import ImageBackground from "../../components/image/ImageBackground";
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
      <div className="relative grid grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        <CardStandard />
        <ImageGrid />
        <ImageBackground />
      </div>
    </Page>
  );
}

export default ExamplesPage;
