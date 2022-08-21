import { CodeBlock } from "../framework";

import { useTranslation } from "next-i18next";
//@ts-ignore
import textOnly from "raw-loader!../../lib/code/ListSimpleTextOnly.code.txt";
//@ts-ignore
import withIcon from "raw-loader!../../lib/code/ListWithIcon.code.txt";
import { SkeletonSimpleComponent } from ".";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";

function SkeletonSimple() {
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
  };
  return (
    <>
      <CodeBlock
        title={t("WithIcon.title", { ns: "list" })}
        raw={raw.withIcon}
        features={features.withIcon}
      >
        <div className="grid w-full place-items-center pt-20 pb-16">
          <SkeletonSimpleComponent />
        </div>
      </CodeBlock>
    </>
  );
}

export default SkeletonSimple;
