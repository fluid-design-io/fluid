import CodeBlock from "../framework/CodeBlock";

import { useTranslation } from "next-i18next";
import ListDetailComponent from "./components/ListDetailComponent";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import { useState } from "react";
//@ts-ignore
import withStart from "raw-loader!../../lib/code/ListDetail.code.txt";

function ListDetail() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("common");
  const raw = {
    withStart,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    withStart: {
      interactions: {
        hover: true,
      },
    },
  };
  return (
    <>
      <CodeBlock
        title={t("Detail.title", { ns: "list" })}
        raw={raw.withStart}
        features={features.withStart}
        onDismiss={() => setNotification(undefined)}
        notification={notification}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListDetailComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default ListDetail;
