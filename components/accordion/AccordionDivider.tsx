import {CodeBlock} from "../framework";

import { useTranslation } from "next-i18next";
//@ts-ignore
import withDivider from "raw-loader!../../lib/code/AccordionDivider.code.txt";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import AccordionDividerComponent from "./components/AccordionDividerComponent";

function AccordionDivider() {
  const { t } = useTranslation("common");
  const raw = {
    withDivider,
  };

  const features: { [x: string]: CodeBlockFeatureProps } = {
    withDivider: {
      interactions: {
        hover: true,
        click: true,
      },
      ui: {
        darkMode: true,
        RTL: {
          description:
            "Icons and arrows will correctly positioned in RTL mode.",
        },
      },
      transitions: {
        reduceMotion: {
          description:
            "When reduce-motion enabled, exapnd/collapse animation will not be played.",
        },
      },
      accessibility: {
        keyboardFocus: true,
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
        title={t("Divider.withDivider.title", { ns: "accordion" })}
        raw={raw.withDivider}
        features={features.withDivider}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <AccordionDividerComponent />
        </div>
      </CodeBlock>
    </>
  );
}

export default AccordionDivider;
