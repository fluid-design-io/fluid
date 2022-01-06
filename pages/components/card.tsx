import { CardImageOnly } from "../../components/card";
import Page from "../../components/framework/Page";
import { SiteMeta } from "../../interfaces/framwork";
import ScrollSpy from "react-scrollspy-navigation";
import React from "react";
import Doc from "../../components/framework/Doc";

function CardPage() {
  const meta: SiteMeta = {
    title: "Fluid Design | Card",
  };
  return (
    <Doc
      meta={meta}
      title="Card"
      description="Cards are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples."
      className="min-h-screen"
    >
      <div key="content" className="flex-grow w-full mx-auto">
        <section id="image-only" className="h-[100vh]">
          <CardImageOnly />
        </section>
      </div>
      <ScrollSpy offsetTop={61} key={"side-bar"}>
        <a className="doc-nav" href="#image-only" ref={React.createRef()}>
          Image Only
        </a>
        <a href="#"></a>
      </ScrollSpy>
    </Doc>
  );
}

export default CardPage;
