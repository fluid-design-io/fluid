import {CodeBlock} from "../framework";

import { useTranslation } from "next-i18next";
import ListDetailComponent from "./components/ListDetailComponent";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import { useState } from "react";
//@ts-ignore
import withstar from "raw-loader!../../lib/code/ListDetail.code.txt";
import { ListDetailLargeComponent } from ".";

function ListDetail() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("common");
  const raw = {
    withstar,
    large: ``,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    withstar: {
      interactions: {
        hover: true,
        click: {
          description: "List item and start button are cliable.",
        },
      },
      ui: {
        RTL: true,
        darkMode: true,
      },
      accessibility: {
        contrast: {
          description:
            "A divide border will be added to seperate each items. When hover, item background will change to bright yellow.",
        },
      },
    },
  };
  return (
    <>
      <CodeBlock
        title={t("Detail.sub-title", { ns: "list" })}
        raw={raw.withstar}
        features={features.withstar}
        onDismiss={() => setNotification(undefined)}
        notification={notification}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListDetailComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
      <CodeBlock
        title={t("Large.title", { ns: "list" })}
        raw={raw.large}
        features={features.large}
        onDismiss={() => setNotification(undefined)}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListDetailLargeComponent />
        </div>
      </CodeBlock>
    </>
  );
}

export default ListDetail;
