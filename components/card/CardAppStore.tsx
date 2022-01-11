import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import { useTranslation } from "next-i18next";
import CardStandardComponent from "./components/CardStandardComponent";
import CardASLargeImageComponent from "./components/CardASLargeImageComponent";

function CardAppStore() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("image");
  const raw = {
    instagram: `
/* V1.0.0 */
import Image from "next/image";
function Example() {
  return (

  );
}
    `,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    standard: {
      ui: {
        darkMode: true,
      },
      interactions: {
        click: {
          description: t(`App Store.click`, { ns: "card" }),
        },
      },

      accessibility: {
        contrast: {
          description: t(`App Store.contrast`, { ns: "card" }),
        },
      },
    },
  };
  const handleClick = (name) => {
    setNotification({ enabled: true, message: name });
  };
  return (
    <>
      <CodeBlock
        title={t(`App Store.title`, { ns: "card" })}
        raw={raw.instagram}
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
