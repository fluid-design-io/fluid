import { useTranslation } from "next-i18next";
import { useState } from "react";
import AppSegment from "../../ui/AppSegment";
import ButtonRadius, { radius } from "./ButtonRadius";
import ColorButtons, { buttonColors } from "./ColorButtons";

function TextButtonComponent({ setNotification, src = undefined, ...props }) {
  const { t } = useTranslation("button");

  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedRadius, setSelectedRadius] = useState<
    "default" | "none" | "full"
  >("default");
  const [selectedType, setSelectedType] = useState("color");
  const activeButton = buttonColors.find((btn) => btn.name === selectedColor);
  const activeRadius = radius.find((btn) => btn.type === selectedRadius);

  const handleClick = ({ message, Icon = undefined }) => {
    setNotification({ enabled: true, message, Icon });
  };

  const segments = [
    {
      value: "color",
      label: t("Color", { ns: "button" }),
      component: (
        <ColorButtons
          key={`segment.color`}
          {...{ setSelectedColor, selectedColor }}
        />
      ),
    },
    {
      value: "Radius",
      label: t("Radius", { ns: "button" }),
      component: (
        <ButtonRadius
          key={`segment.radius`}
          {...{ setSelectedRadius, selectedRadius }}
        />
      ),
    },
    {
      value: "icon",
      label: t("Icon", { ns: "button" }),
      component: <h3 key={`segment.icon`}>Available Soon...</h3>,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full px-4 space-y-8">
      <div className="flex flex-row items-stretch justify-center w-full h-full gap-6 sm:items-center sm:flex-col">
        <div
          className={`w-full px-4 component justify-center ${
            props.className ? props.className : ``
          } flex gap-6 items-center flex-wrap`}
        >
          <button
            className={`px-2.5 py-1 text-xs font-semibold prefers-contrast:py-1.5 prefers-contrast:px-3 ${activeButton.color.light} ${activeRadius.style.small} `}
            onClick={() =>
              handleClick({ message: t(`Button Studio.small`, { ns: "button" }) })
            }
          >
            {t(`Button Studio.small`, { ns: "button" })}
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.light} ${activeRadius.style.regular}`}
            onClick={() =>
              handleClick({
                message: t(`Button Studio.regular`, { ns: "button" }),
              })
            }
          >
            {t(`Button Studio.regular`, { ns: "button" })}
          </button>
          <button
            className={`px-4 py-2 tracking-wide font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.light} ${activeRadius.style.medium}`}
            onClick={() =>
              handleClick({
                message: t(`Button Studio.medium`, { ns: "button" }),
              })
            }
          >
            {t(`Button Studio.medium`, { ns: "button" })}
          </button>
          <button
            className={`px-6 py-2.5 tracking-wider font-semibold prefers-contrast:py-2.5 ${activeButton.color.light} ${activeRadius.style.large}`}
            onClick={() =>
              handleClick({ message: t(`Button Studio.large`, { ns: "button" }) })
            }
          >
            {t(`Button Studio.large`, { ns: "button" })}
          </button>
        </div>
        <div
          className={`w-full px-4 component justify-center ${
            props.className ? props.className : ``
          } flex gap-6 items-center flex-wrap`}
        >
          <button
            className={`px-2.5 py-1 text-xs font-semibold prefers-contrast:py-1.5 prefers-contrast:px-3 ${activeButton.color.dark} ${activeRadius.style.small}`}
            onClick={() =>
              handleClick({ message: t(`Button Studio.small`, { ns: "button" }) })
            }
          >
            {t(`Button Studio.small`, { ns: "button" })}
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.dark} ${activeRadius.style.medium}`}
            onClick={() =>
              handleClick({
                message: t(`Button Studio.regular`, { ns: "button" }),
              })
            }
          >
            {t(`Button Studio.regular`, { ns: "button" })}
          </button>
          <button
            className={`px-4 py-2 tracking-wide font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.dark} ${activeRadius.style.regular}`}
            onClick={() =>
              handleClick({
                message: t(`Button Studio.medium`, { ns: "button" }),
              })
            }
          >
            {t(`Button Studio.medium`, { ns: "button" })}
          </button>
          <button
            className={`px-6 py-2.5 tracking-wider font-semibold prefers-contrast:py-2.5 ${activeButton.color.dark} ${activeRadius.style.large}`}
            onClick={() =>
              handleClick({ message: t(`Button Studio.large`, { ns: "button" }) })
            }
          >
            {t(`Button Studio.large`, { ns: "button" })}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4 rounded-md shadow-lg outline-none card-bg dark:bg-stone-900/80 dark:prefers-contrast:bg-stone-800/90 shadow-stone-800/5 sm:rounded-xl">
        <AppSegment
          defaultValue={selectedType}
          onUpdate={(category) => setSelectedType(category)}
          segments={segments}
        />
      </div>
    </div>
  );
}

export default TextButtonComponent;
