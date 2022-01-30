import CodeBlock from "../framework/CodeBlock";

import { useTranslation } from "next-i18next";
//@ts-ignore
import withOutIcon from "raw-loader!../../lib/code/AccordionSimpleWithOutIcon.code.txt";
import { AccordionSimpleComponent } from ".";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";

function AccordionSimple() {
  const { t } = useTranslation("common");
  const raw = {
    withOutIcon,
  };

  const features: { [x: string]: CodeBlockFeatureProps } = {
    withOutIcon: {
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
        title={t("Simple.withOutIcon.title", { ns: "accordion" })}
        raw={raw.withOutIcon}
        features={features.withOutIcon}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <AccordionSimpleComponent />
        </div>
      </CodeBlock>
    </>
  );
}

export default AccordionSimple;
