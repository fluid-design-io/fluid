import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import {CodeBlock} from "../framework";
import CardCollageComponent from "./components/CardCollageComponent";
//@ts-ignore
import collage from "raw-loader!../../lib/code/CardCollage.code.txt";

function CardCollage() {
  const raw = {
    collage,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    collage: {
      accessibility: {
        keyboardFocus: true,
        screenReader: {
          description:
            "Collage images will be presented with syntax such as this 'Collage related to Forest, by John Doe.' And Links will be presented with its functionality, such as 'View more images shot by John Doe.' or 'View images related to nature.'",
        },
        contrast: {
          description:
            "A ring will appear when user hover on the image collage or tags. Which helps incrase readability.",
        },
      },
      interactions: {
        click: {
          description: "Collage, author, and tags are clickable.",
        },
        hover: {
          description:
            "When cursor hovers on the collage, it will present a scale effect.",
        },
      },
      ui: {
        darkMode: {
          description:
            "Text and tag buttons colors will change based on user's appearance.",
        },
      },
    },
  };
  const [notification, setNotification] = useState(undefined);
  return (
    <CodeBlock
      title="Collage Card"
      raw={raw.collage}
      features={features.collage}
      notification={notification}
      onDismiss={() => setNotification(undefined)}
    >
      <div className="grid w-full pt-20 pb-16 place-items-center">
        <CardCollageComponent setNotification={setNotification} />
      </div>
    </CodeBlock>
  );
}

export default CardCollage;
