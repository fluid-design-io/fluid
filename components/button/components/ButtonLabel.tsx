import { RadioGroup } from "@headlessui/react";
import { BanIcon, MailIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import {
  BanIcon as BanIconSolid,
  MailIcon as MailIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
} from "@heroicons/react/solid";

function ButtonLabel({ setCookie, selectedIcon, buttonLabel, ...props }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCookie("buttonLabel", e.target.value.replace(/[^A-Z0-9\ \!]+/gi, ""));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="butotn-label"
          value={buttonLabel}
          placeholder="Set button label"
          maxLength={18}
          autoCapitalize="on"
          onChange={handleChange}
          className="block w-full px-3 py-1.5 border rounded-md shadow-sm appearance-none placeholder-stone-400 border-stone-300 bg-transparent focus:outline-none focus:ring-stone-500 focus:border-stone-500 text-sm dark:text-stone-50 prefers-contrast:font-medium prefers-contrast:dark:border-stone-50"
          autoFocus={buttonLabel.length === 0}
        />
      </form>
      <RadioGroup
        value={selectedIcon}
        onChange={(value) => setCookie("selectedIcon", value)}
        className={"flex items-center justify-between space-x-4 mt-4 w-full"}
      >
        <RadioGroup.Option
          value="start"
          className={({ active, checked }) =>
            `rounded-full w-12 h-12 flex items-center justify-center transition ${
              checked
                ? `${props.palette}`
                : `bg-stone-200 hover:opacity-80 cursor-pointer`
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
                : `bg-stone-200 hover:opacity-80 cursor-pointer`
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
                : `bg-stone-200 hover:opacity-80 cursor-pointer`
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
      </RadioGroup>
    </div>
  );
}

export default ButtonLabel;
