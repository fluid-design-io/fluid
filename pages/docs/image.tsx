import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";
import { Collage, ImageGrid, SingleImage } from "../../components/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ImageBackground from "../../components/image/ImageBackground";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}
function CardPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Image",
    description:
      "This page is focused to provide examples that highlights images as the main piece of UI which users can interact with.",
  };
  const sections = [
    {
      title: "Single Image",
      description: "",
      component: <SingleImage />,
    },
    {
      title: "Background",
      description: "",
      component: <ImageBackground />,
    },
    {
      title: "Collage",
      description: (
        <p>
          The aspect ratio of this component is always square. Simply replace{" "}
          <span
            className="code-highlight"
            aria-label="code snippet, aspect-square,"
          >
            `aspect-square`
          </span>{" "}
          to change it's ratio
        </p>
      ),
      component: <Collage />,
    },
    {
      title: "Grid",
      description: "",
      component: <ImageGrid />,
    },
  ];
  return (
    <Doc
      meta={meta}
      title="Image"
      description="This page is focused to provide examples that highlights images as the main piece of UI which users can interact with."
      sections={sections}
    />
  );
}

export default CardPage;
