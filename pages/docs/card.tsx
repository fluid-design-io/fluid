import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Link from "next/link";
import Doc from "../../components/framework/Doc";
import { CardCollage } from "../../components/card";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  console.log({ locale });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}
function CardPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Card",
    description:
      "Cards are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples.",
  };
  const sections = [
    {
      title: "Collage",
      description: (
        <p>
          This example uses the Collage component from{" "}
          <Link href={`/components/image#collage`}>Image Component</Link>.
        </p>
      ),
      component: <CardCollage />,
    },
  ];
  return (
    <Doc
      meta={meta}
      title="Card"
      description="Cards are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples."
      className="min-h-screen"
      sections={sections}
    />
  );
}

export default CardPage;
