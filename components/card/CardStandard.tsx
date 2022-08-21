import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import {CodeBlock} from "../framework";
import { useTranslation } from "next-i18next";
import CardStandardComponent from "./components/CardStandardComponent";
//@ts-ignore
import standard from "raw-loader!../../lib/code/CardStandardComponent.code.txt";

function CardStandard() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("image");
  const raw = {
    standard,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    standard: {
      ui: {
        darkMode: true,
      },
      interactions: {
        click: {
          description: t(`Standard.click`, { ns: "card" }),
        },
      },

      accessibility: {
        contrast: {
          description: t(`Standard.contrast`, { ns: "card" }),
        },
      },
    },
  };
  return (
    <>
      <CodeBlock
        title={t(`Standard.title`, { ns: "card" })}
        raw={raw.standard}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
        features={features.standard}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <CardStandardComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default CardStandard;
