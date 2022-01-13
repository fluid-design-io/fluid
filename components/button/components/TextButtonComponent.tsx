import { MailIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {
  MailIcon as MailIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
} from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import AppSegment from "../../ui/AppSegment";
import ButtonLabel from "./ButtonLabel";
import ButtonRadius, { radius } from "./ButtonRadius";
import ColorButtons, { buttonColors } from "./ColorButtons";

function TextButtonComponent({ setNotification, src = undefined, ...props }) {
  const { t } = useTranslation("button");

  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedRadius, setSelectedRadius] = useState<
    "default" | "none" | "full"
  >("default");
  const [selectedType, setSelectedType] = useState("color");
  const [selectedIcon, setSelectedIcon] = useState<"start" | "end" | "none">(
    "none"
  );
  const [buttonLabel, setButtonLabel] = useState("");
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
      value: "label",
      label: t("Label", { ns: "button" }),
      component: (
        <ButtonLabel
          key={`segment.label`}
          {...{ setSelectedIcon, selectedIcon, setButtonLabel, buttonLabel }}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full px-4 space-y-8">
      <AnimatePresence>
        <div className="flex flex-row flex-wrap items-stretch justify-center h-full gap-6 sm:items-center sm:flex-col">
          <div
            className={`component justify-center ${
              props.className ? props.className : ``
            } flex flex-col sm:flex-row gap-6 items-center flex-wrap`}
          >
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.small}
              layoutId={`Button Studio.small.light`}
              className={`flex-shrink-0 flex justify-center items-center px-2.5 py-1 text-xs font-semibold prefers-contrast:py-1.5 prefers-contrast:px-3 ${activeButton.color.light} ${activeRadius.style.small}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.small`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIconSolid className="w-3 h-3 mr-1" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.small`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIconSolid className="w-3 h-3 ml-1" />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.regular}
              layoutId={`Button Studio.regular.light`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.light} ${activeRadius.style.regular}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.regular`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIcon className="w-4 h-4 mr-2" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.regular`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon className="w-4 h-4 ml-2" />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.medium}
              layoutId={`Button Studio.medium.light`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 tracking-wide font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.light} ${activeRadius.style.medium}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.medium`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIcon className="w-5 h-5 mr-2" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.medium`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon className="w-5 h-5 ml-2" />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.large}
              layoutId={`Button Studio.large.light`}
              className={`flex-shrink-0 flex justify-center items-center px-6 py-2.5 tracking-wider font-semibold prefers-contrast:py-2.5 ${activeButton.color.light} ${activeRadius.style.large}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.large`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIcon className="w-5 h-5 mr-2" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.large`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon className="w-5 h-5 ml-2" />
              )}
            </motion.button>
          </div>
          <div
            className={`component justify-center ${
              props.className ? props.className : ``
            } flex flex-col sm:flex-row gap-6 items-center flex-wrap`}
          >
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.small}
              layoutId={`Button Studio.small`}
              className={`flex-shrink-0 flex justify-center items-center px-2.5 py-1 text-xs font-semibold prefers-contrast:py-1.5 prefers-contrast:px-3 ${activeButton.color.dark} ${activeRadius.style.small}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.small`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIconSolid className="w-3 h-3 mr-1" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.small`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIconSolid className="w-3 h-3 ml-1" />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.regular}
              layoutId={`Button Studio.regular`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.dark} ${activeRadius.style.regular}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.regular`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIcon className="w-4 h-4 mr-2" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.regular`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon className="w-4 h-4 ml-2" />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.medium}
              layoutId={`Button Studio.medium`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 tracking-wide font-medium prefers-contrast:py-2.5 prefers-contrast:px-4.5 ${activeButton.color.dark} ${activeRadius.style.medium}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.medium`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIcon className="w-5 h-5 mr-2" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.medium`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon className="w-5 h-5 ml-2" />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.large}
              layoutId={`Button Studio.large`}
              className={`flex-shrink-0 flex justify-center items-center px-6 py-2.5 tracking-wider font-semibold prefers-contrast:py-2.5 ${activeButton.color.dark} ${activeRadius.style.large}`}
              onClick={() =>
                handleClick({
                  message:
                    buttonLabel.length > 0
                      ? buttonLabel
                      : t(`Button Studio.large`, { ns: "button" }),
                  Icon:
                    selectedIcon === "start"
                      ? MailIcon
                      : selectedIcon === "end"
                      ? PaperAirplaneIcon
                      : undefined,
                })
              }
            >
              {selectedIcon === "start" && (
                <MailIcon className="w-5 h-5 mr-2" />
              )}
              {buttonLabel.length === 0
                ? t(`Button Studio.large`, { ns: "button" })
                : buttonLabel}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon className="w-5 h-5 ml-2" />
              )}
            </motion.button>
          </div>
        </div>
      </AnimatePresence>
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
