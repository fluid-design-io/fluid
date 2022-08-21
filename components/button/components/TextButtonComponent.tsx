import { MailIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {
  MailIcon as MailIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
} from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import AppSegment from "../../ui/AppSegment";
import ButtonLabel from "./ButtonLabel";
import ButtonRadius from "./ButtonRadius";
import ColorButtons from "./ColorButtons";

function TextButtonComponent({
  setNotification,
  src = undefined,
  selectedColor,
  selectedRadius,
  selectedType,
  selectedIcon,
  iconOnly,
  setCookie,
  activeButton,
  activeRadius,
  buttonLabel,
  ...props
}) {
  const { t } = useTranslation("button");

  const handleClick = ({ message, Icon = undefined }) => {
    setNotification({ enabled: true, message, Icon });
  };

  const segments = [
    {
      value: "color",
      label: t("Color", { ns: "button" }),
      component: (
        <ColorButtons key={`segment.color`} {...{ setCookie, selectedColor }} />
      ),
    },
    {
      value: "Radius",
      label: t("Radius", { ns: "button" }),
      component: (
        <ButtonRadius
          key={`segment.radius`}
          {...{ setCookie, selectedRadius, palette: activeButton.palette }}
        />
      ),
    },
    {
      value: "label",
      label: t("Label", { ns: "button" }),
      component: (
        <ButtonLabel
          key={`segment.label`}
          {...{
            setCookie,
            selectedIcon,
            iconOnly,
            buttonLabel,
            palette: activeButton.palette,
          }}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full px-4 space-y-8">
      <AnimatePresence>
        <div className="flex flex-row flex-wrap items-stretch justify-center h-full gap-6 sm:items-center sm:!flex-col">
          <div
            className={`component justify-center ${
              props.className ? props.className : ``
            } flex flex-col sm:!flex-row gap-6 items-center flex-wrap`}
          >
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.small}
              layoutId={`Button Studio.small.light`}
              className={`flex-shrink-0 flex justify-center items-center px-2.5 py-1 text-xs font-semibold contrast-more:py-1.5 contrast-more:px-3 ${activeButton.color.light} ${activeRadius.style.small}`}
              aria-label={buttonLabel ? `${buttonLabel}, Button` : `Button`}
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
                <MailIconSolid
                  className={`w-3 h-3 ${JSON.parse(iconOnly) ? "" : "mr-1"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.small`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIconSolid
                  className={`w-3 h-3 ${JSON.parse(iconOnly) ? "" : "ml-1"}`}
                />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.regular}
              layoutId={`Button Studio.regular.light`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${activeButton.color.light} ${activeRadius.style.regular}`}
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
                <MailIcon
                  className={`w-4 h-4 ${JSON.parse(iconOnly) ? "" : "mr-2"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.regular`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon
                  className={`w-4 h-4 ${JSON.parse(iconOnly) ? "" : "ml-1.5"}`}
                />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.medium}
              layoutId={`Button Studio.medium.light`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 tracking-wide font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${activeButton.color.light} ${activeRadius.style.medium}`}
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
                <MailIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "mr-2"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.medium`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "ml-2"}`}
                />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.large}
              layoutId={`Button Studio.large.light`}
              className={`flex-shrink-0 flex justify-center items-center px-6 py-2.5 tracking-wider font-semibold contrast-more:py-2.5 ${activeButton.color.light} ${activeRadius.style.large}`}
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
                <MailIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "mr-2"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.large`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "ml-2"}`}
                />
              )}
            </motion.button>
          </div>
          <div
            className={`component justify-center ${
              props.className ? props.className : ``
            } flex flex-col sm:!flex-row gap-6 items-center flex-wrap`}
          >
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.small}
              layoutId={`Button Studio.small`}
              className={`flex-shrink-0 flex justify-center items-center px-2.5 py-1 text-xs font-semibold contrast-more:py-1.5 contrast-more:px-3 ${activeButton.color.dark} ${activeRadius.style.small}`}
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
                <MailIconSolid
                  className={`w-3 h-3 ${JSON.parse(iconOnly) ? "" : "mr-1"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.small`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIconSolid
                  className={`w-3 h-3 ${JSON.parse(iconOnly) ? "" : "ml-1"}`}
                />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.regular}
              layoutId={`Button Studio.regular`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 text-sm font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${activeButton.color.dark} ${activeRadius.style.regular}`}
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
                <MailIcon
                  className={`w-4 h-4 ${JSON.parse(iconOnly) ? "" : "mr-2"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.regular`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon
                  className={`w-4 h-4 ml ${
                    JSON.parse(iconOnly) ? "" : "ml-1.5"
                  }`}
                />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.medium}
              layoutId={`Button Studio.medium`}
              className={`flex-shrink-0 flex justify-center items-center px-4 py-2 tracking-wide font-medium contrast-more:py-2.5 contrast-more:px-4.5 ${activeButton.color.dark} ${activeRadius.style.medium}`}
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
                <MailIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "mr-2"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.medium`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "ml-2"}`}
                />
              )}
            </motion.button>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              animate={activeRadius.animate.large}
              layoutId={`Button Studio.large`}
              className={`flex-shrink-0 flex justify-center items-center px-6 py-2.5 tracking-wider font-semibold contrast-more:py-2.5 ${activeButton.color.dark} ${activeRadius.style.large}`}
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
                <MailIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "mr-2"}`}
                />
              )}
              {!JSON.parse(iconOnly) &&
                (buttonLabel.length === 0
                  ? t(`Button Studio.large`, { ns: "button" })
                  : buttonLabel)}
              {selectedIcon === "end" && (
                <PaperAirplaneIcon
                  className={`w-5 h-5 ${JSON.parse(iconOnly) ? "" : "ml-2"}`}
                />
              )}
            </motion.button>
          </div>
        </div>
      </AnimatePresence>
      <div className="flex flex-col items-center justify-center w-full p-4 rounded-md shadow-lg outline-none card-bg dark:bg-primary-900/80 dark:contrast-more:bg-primary-800/90 shadow-primary-800/5 sm:rounded-xl">
        <AppSegment
          defaultValue={selectedType}
          onUpdate={(category) => setCookie("selectedType", category)}
          segments={segments}
        />
      </div>
    </div>
  );
}

export default TextButtonComponent;
