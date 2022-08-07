import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import { useTranslation } from "next-i18next";
import CardASLargeImageComponent from "./components/CardASLargeImageComponent";
//@ts-ignore
import largeImage from "raw-loader!../../lib/code/CardASLargeImage.code.txt";

function CardAppStore() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("image");
  const raw = {
    largeImage,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    standard: {
      ui: {
        darkMode: {
          description: t(`App Store.dark`, { ns: "card" }),
        },
      },
      interactions: {
        click: {
          description: t(`App Store.click`, { ns: "card" }),
        },
        hover: {
          description: t(`App Store.hover`, { ns: "card" }),
        },
      },

      accessibility: {
        contrast: {
          description: t(`App Store.contrast`, { ns: "card" }),
        },
      },
    },
  };
  return (
    <>
      <CodeBlock
        title={t(`App Store.sub-title`, { ns: "card" })}
        raw={raw.largeImage}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
        features={features.standard}
      >
        <div className="grid items-stretch w-full pt-20 pb-16 place-items-center">
          <CardASLargeImageComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default CardAppStore;
