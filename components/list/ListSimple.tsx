import CodeBlock from "../framework/CodeBlock";

import { useTranslation } from "next-i18next";
import ListTextOnlyComponent from "./components/ListTextOnlyComponent";
//@ts-ignore
import textOnly from "raw-loader!../../lib/code/ListSimpleTextOnly.code.txt";
//@ts-ignore
import withIcon from "raw-loader!../../lib/code/ListWithIcon.code.txt";
import { ListWithIconComponent } from ".";
import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";

function ListSimple() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("common");
  const raw = {
    textOnly,
    withIcon,
  };

  const features: { [x: string]: CodeBlockFeatureProps } = {
    textOnly: {
      interactions: {
        hover: true,
      },
      ui: {
        darkMode: true,
      },
      accessibility: {
        contrast: {
          description:
            "A divide border will be added to seperate each items. When hover, item background will change to bright yellow.",
        },
      },
    },
    withIcon: {
      interactions: {
        hover: true,
        click: true,
      },
      ui: {
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
        title={t("TextOnly.title", { ns: "list" })}
        raw={raw.textOnly}
        features={features.textOnly}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListTextOnlyComponent />
        </div>
      </CodeBlock>
      <CodeBlock
        title={t("WithIcon.title", { ns: "list" })}
        raw={raw.withIcon}
        onDismiss={() => setNotification(undefined)}
        notification={notification}
        features={features.withIcon}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListWithIconComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default ListSimple;
