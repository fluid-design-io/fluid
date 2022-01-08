import Page from "./Page";
import React from "react";
import { getBody } from "../../lib/getBody";

function Doc({ meta, title, description, children, ...props }) {
  const docNav = getBody(children, "docNav");
  return (
    <Page
      meta={meta}
      docNav={getBody(children, "docNav")}
      className="flex min-h-screen space-x-4"
      hasMain={true}
    >
      <div className="flex-grow max-w-5xl p-4 mx-auto md:px-16 lg:px-8 xl:px-16">
        <div className="hidden md:block lg:hidden">{docNav}</div>
        <main id="main" title={`Documentation for the ${title} component`}>
          <h1 className="md:pt-12">{title}</h1>
          <p className="pb-6 text-lg md:text-xl">{description} </p>
          {getBody(children, "content")}
        </main>
      </div>
      <div
        className={`sticky top-0 z-20 hidden h-screen lg:block min-w-[12rem] xl:min-w-[14rem] pr-4 md:pr-16 pt-[61px]`}
      >
        {docNav}
      </div>
    </Page>
  );
}

export default Doc;
