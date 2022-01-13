import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import { useTranslation } from "next-i18next";
//@ts-ignore
// import largeImage from "raw-loader!../../lib/code/CardASLargeImage.code.txt";
import { TextButtonComponent } from ".";

function TextButton() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("button");
  const raw = {
    filled: `/* Available soon */\n\n\n\n\n\n\n\n\n\n\n`,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    rounded: {
      ui: {
        darkMode: {
          description: t(`Rounded.dark`, { ns: "button" }),
        },
      },
      interactions: {
        click: {
          description: t(`Rounded.click`, { ns: "button" }),
        },
        hover: {
          description: t(`Rounded.hover`, { ns: "button" }),
        },
      },

      accessibility: {
        contrast: {
          description: t(`Rounded.contrast`, { ns: "button" }),
        },
      },
    },
  };
  return (
    <>
      <CodeBlock
        title={t(`Button Studio.sub-title`, { ns: "button" })}
        raw={raw.filled}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
        features={features.standard}
      >
        <div className="pt-20 pb-4 min-h-[28rem] grid place-items-center">
          <TextButtonComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default TextButton;
