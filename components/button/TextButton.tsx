import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import {CodeBlock} from "../framework";
import { useTranslation } from "next-i18next";
//@ts-ignore
// import largeImage from "raw-loader!../../lib/code/CardASLargeImage.code.txt";
import { TextButtonComponent } from ".";
import { useCookies } from "react-cookie";
import { buttonColors } from "./components/ColorButtons";
import { radius } from "./components/ButtonRadius";

function TextButton() {
  const [cookies, setCookie] = useCookies([
    "selectedColor",
    "selectedRadius",
    "selectedType",
    "selectedIcon",
    "buttonLabel",
    "iconOnly",
  ]);
  const {
    selectedColor = "gray",
    selectedRadius = "default",
    selectedType = "color",
    selectedIcon = "none",
    buttonLabel = "",
    iconOnly = "false",
  } = cookies;

  const activeButton = buttonColors.find((btn) => btn.name === selectedColor);
  const activeRadius = radius.find((btn) => btn.type === selectedRadius);

  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("button");
  const raw = {
    customizer: `
/* 
V1.1.0
Button - Button Customizer
Component by fluid-design.io
Last updated: 2/1/22

------ Extra Dependency Required ------

Package Name: Heroicons
npm install @heroicons/react
Github: https://github.com/tailwindlabs/heroicons

*/

import { MailIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {
  MailIcon as MailIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
} from "@heroicons/react/solid";

function Example() {
  return (
    <>
    
    {/* Light - Small Size */}
    
      <button
        className={\`flex-shrink-0 flex justify-center items-center px-2.5 py-1 text-xs font-semibold contrast-more:py-1.5 contrast-more:px-3 ${
          activeButton.color.light
        } ${activeRadius.style._small}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIconSolid className="w-3 h-3 mr-1" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.small`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIconSolid className="w-3 h-3 ml-1" />`
            : ``
        }
      </button>
      
      {/* Light - Default Size */}
      
      <button
        className={\`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${
          activeButton.color.light
        } ${activeRadius.style._regular}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIcon className="w-4 h-4 mr-2" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.regular`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIcon className="w-4 h-4 ml-1.5" />`
            : ``
        }
      </button>

      
      {/* Light - Medium Size */}
      
      <button
        className={\`flex-shrink-0 flex justify-center items-center px-4 py-2 tracking-wide font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${
          activeButton.color.light
        } ${activeRadius.style._medium}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIcon className="w-5 h-5 mr-2" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.medium`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIcon className="w-5 h-5 ml-2" />`
            : ``
        }
      </button>
      
      {/* Light - Large Size */}
      
      <button
        className={\`flex-shrink-0 flex justify-center items-center px-6 py-2.5 tracking-wider font-semibold contrast-more:py-2.5 ${
          activeButton.color.light
        } ${activeRadius.style._large}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIcon className="w-5 h-5 mr-2" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.large`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIcon className="w-5 h-5 ml-2" />`
            : ``
        }
      </button>
      
      {/* Dark - Small Size */}
      

      <button
        className={\`flex-shrink-0 flex justify-center items-center px-2.5 py-1 text-xs font-semibold contrast-more:py-1.5 contrast-more:px-3 ${
          activeButton.color.dark
        } ${activeRadius.style._small}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIconSolid className="w-3 h-3 mr-1" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.small`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIconSolid className="w-3 h-3 ml-1" />`
            : ``
        }
      </button>
      
      {/* Dark - Default Size */}
      

      <button
        className={\`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${
          activeButton.color.dark
        } ${activeRadius.style._regular}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIcon className="w-4 h-4 mr-2" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.regular`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIcon className="w-4 h-4 ml-1.5" />`
            : ``
        }
      </button>
      
      {/* Dark - Medium Size */}
      

      <button
        className={\`flex-shrink-0 flex justify-center items-center px-4 py-2 tracking-wide font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${
          activeButton.color.dark
        } ${activeRadius.style._medium}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIcon className="w-5 h-5 mr-2" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.medium`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIcon className="w-5 h-5 ml-2" />`
            : ``
        }
      </button>
      
      {/* Dark - Large Size */}
      

      <button
        className={\`flex-shrink-0 flex justify-center items-center px-6 py-2.5 tracking-wider font-semibold contrast-more:py-2.5 ${
          activeButton.color.dark
        } ${activeRadius.style._large}\`}
        onClick={() => null}
        aria-label={'Button'}
      >
        ${
          selectedIcon === "start"
            ? `<MailIcon className="w-5 h-5 mr-2" />`
            : ``
        }
        ${
          !JSON.parse(iconOnly)
            ? buttonLabel.length === 0
              ? t(`Button Studio.large`, { ns: "button" })
              : buttonLabel
            : ``
        }
        ${
          selectedIcon === "end"
            ? `<PaperAirplaneIcon className="w-5 h-5 ml-2" />`
            : ``
        }
      </button>
    </>
  );
}

export default Example;

    `,
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
        title={t(`Button Studio.sub-title`, { ns: "button" })}
        raw={raw.customizer}
        features={features.customizer}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
      >
        <div className="pt-20 pb-4 min-h-[28rem] grid place-items-center">
          <TextButtonComponent
            {...{
              setNotification,
              selectedColor,
              selectedRadius,
              selectedType,
              selectedIcon,
              iconOnly,
              setCookie,
              activeButton,
              activeRadius,
              buttonLabel,
            }}
          />
        </div>
      </CodeBlock>
    </>
  );
}

export default TextButton;
