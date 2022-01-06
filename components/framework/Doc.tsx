import Page from "./Page";
import React from "react";

function Doc({ meta, title, description, children, ...props }) {
  const getBody = (key) => children.filter((div) => div.key === key);
  return (
    <Page meta={meta} className="min-h-screen">
      <div className="flex space-x-4">
        <div className="flex-1 w-full max-w-5xl p-4 mx-auto md:px-16">
          <h1 className="md:pt-12">{title}</h1>
          <h3 className="pb-6">{description} </h3>
          <div id="content">{getBody("content")}</div>
        </div>
        <ul
          className={`sticky top-0 z-20 hidden h-screen lg:block min-w-[12rem] flex-shrink xl:min-w-[14rem] pr-4 md:pr-16 pt-[61px]`}
        >
          {getBody("side-bar")}
        </ul>
      </div>
    </Page>
  );
}

export default Doc;
