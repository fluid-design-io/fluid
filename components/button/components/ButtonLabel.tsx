import { RadioGroup } from "@headlessui/react";
import { BanIcon, MailIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {
  BanIcon as BanIconSolid,
  MailIcon as MailIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
} from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

function ButtonLabel({
  setCookie,
  selectedIcon,
  iconOnly,
  buttonLabel,
  ...props
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCookie("buttonLabel", e.target.value.replace(/[^A-Z0-9\ \!]+/gi, ""));
  };
  console.log(JSON.parse(iconOnly));

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full space-x-2"
      >
        <motion.input
          type="text"
          name="butotn-label"
          value={buttonLabel}
          placeholder="Set button label"
          maxLength={18}
          autoCapitalize="on"
          onChange={handleChange}
          className="block px-3 py-1.5 border rounded-md shadow-sm appearance-none placeholder-primary-400 border-primary-300 dark:border-primary-600 bg-transparent focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm dark:text-primary-50 contrast-more:font-medium contrast-more:dark:border-primary-50"
          autoFocus={buttonLabel.length === 0}
        />
      </form>
      <RadioGroup
        value={selectedIcon}
        onChange={(value) => {
          setCookie("selectedIcon", value);
          value === "none" && setCookie("iconOnly", false);
        }}
        className={"flex items-center justify-center space-x-4 mt-4 w-full"}
      >
        <RadioGroup.Option
          value="start"
          className={({ active, checked }) =>
            `rounded-full w-12 h-12 flex items-center justify-center transition ${
              checked
                ? `${props.palette}`
                : `bg-primary-200 hover:opacity-80 cursor-pointer`
            } `
          }
        >
          {({ checked }) =>
            !checked ? (
              <MailIcon className="w-6 h-6" />
            ) : (
              <MailIconSolid className="w-6 h-6" />
            )
          }
        </RadioGroup.Option>
        <RadioGroup.Option
          value="none"
          className={({ active, checked }) =>
            `rounded-full w-12 h-12 flex items-center justify-center transition ${
              checked
                ? `${props.palette}`
                : `bg-primary-200 hover:opacity-80 cursor-pointer`
            } `
          }
        >
          {({ checked }) =>
            !checked ? (
              <BanIcon className="w-6 h-6" />
            ) : (
              <BanIconSolid className="w-6 h-6" />
            )
          }
        </RadioGroup.Option>
        <RadioGroup.Option
          value="end"
          className={({ active, checked }) =>
            `rounded-full w-12 h-12 flex items-center justify-center transition ${
              checked
                ? `${props.palette}`
                : `bg-primary-200 hover:opacity-80 cursor-pointer`
            } `
          }
        >
          {({ checked }) =>
            !checked ? (
              <PaperAirplaneIcon className="w-6 h-6" />
            ) : (
              <PaperAirplaneIconSolid className="w-6 h-6" />
            )
          }
        </RadioGroup.Option>

        {selectedIcon !== "none" && (
          <button
            className={`rounded-full w-12 h-12 flex items-center justify-center transition text-center relative overflow-hidden ${
              JSON.parse(iconOnly)
                ? `${props.palette}`
                : `bg-primary-200 hover:opacity-80 cursor-pointer`
            } ${
              JSON.parse(iconOnly) ? "ring-4 ring-inset ring-primary-200 dark:ring-primary-700" : ""
            } `}
            onClick={() => setCookie("iconOnly", !JSON.parse(iconOnly))}
            aria-label={iconOnly ? "Enable text" : "Disable text"}
            aria-live="assertive"
          >
            <AnimatePresence mode='wait' >
              {JSON.parse(iconOnly) && (
                <motion.span
                  key={`button.iconOnly.strike`}
                  initial={{ width: 0, rotate: 45 }}
                  animate={{ width: 50, rotate: 45 }}
                  exit={{ width: 0, rotate: 45 }}
                  className={`h-1 absolute bg-primary-200 dark:bg-primary-700 z-10`}
                  transition={{ type: "spring", bounce: 0, duration: 0.45 }}
                />
              )}
            </AnimatePresence>
            <span className="text-xs font-bold uppercase">ABC</span>
          </button>
        )}
      </RadioGroup>
    </div>
  );
}

export default ButtonLabel;
