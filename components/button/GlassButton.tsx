import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import {CodeBlock} from "../framework";
import { useTranslation } from "next-i18next";
//@ts-ignore
import glass from "raw-loader!../../lib/code/GlassButton.code.txt";
import { GlassButtonComponent } from ".";

function GlassButton() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("button");
  const raw = {
    glass,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    customizer: {
      ui: {
        darkMode: true,
      },
      interactions: {
        click: true,
        hover: true,
      },
      accessibility: {
        contrast: true,
      },
    },
  };
  return (
    <>
      <CodeBlock
        title={t(`Glass Button.sub-title`, { ns: "button" })}
        raw={raw.glass}
        features={features.customizer}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
      >
        <GlassButtonComponent
          {...{
            setNotification,
          }}
        />
      </CodeBlock>
    </>
  );
}

export default GlassButton;
