import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";
import ScrollSpy from "../../lib/ScrollSpy";
import DocSection from "../../components/framework/DocSection";
import { Collage, SingleImage } from "../../components/image";

function CardPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Card",
  };
  const sections = [
    {
      sectionTitle: "Single Image",
      sectionId: "single-image",
      description: "",
    },
    {
      sectionTitle: "Collage",
      sectionId: "collage",
      description: (
        <p>
          The aspect ratio of this component is always square. Simply replace{" "}
          <span className="code-highlight">`aspect-square`</span> to change it's
          ratio
        </p>
      ),
    }
  ];
  return (
    <Doc
      meta={meta}
      title="Image"
      description="This page is focused to provide examples that highlights images as the main piece of UI which users can interact with."
      className="min-h-screen"
    >
      <div key="content" className="flex-grow w-full mx-auto">
        <ScrollSpy offsetBottom={500}>
          <DocSection
            sectionId={sections[0].sectionId}
            sectionTitle={sections[0].sectionTitle}
            sectionDescription={sections[0]?.description}
            component={<SingleImage />}
          />
          <DocSection
            component={<Collage />}
            sectionId={sections[1].sectionId}
            sectionTitle={sections[1].sectionTitle}
            sectionDescription={sections[1]?.description}
          />
        </ScrollSpy>
      </div>
      <ul key={`docNav`}>
        <li className="doc-nav-header">On this page</li>
        {sections.map(({ sectionId, sectionTitle }) => (
          <li
            key={`${sectionId}`}
            className="doc-nav"
            data-to-scrollspy-id={sectionId}
          >
            <a href={`#${sectionId}`}>{sectionTitle}</a>
          </li>
        ))}
      </ul>
    </Doc>
  );
}

export default CardPage;
