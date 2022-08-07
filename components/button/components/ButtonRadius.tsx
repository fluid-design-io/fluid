import { RadioGroup } from "@headlessui/react";
import Image from "next/image";

export const radius = [
  {
    type: "none",
    Icon: ({ selected, palette }) => (
      <div
        className={`w-16 h-16 absolute left-1/3 top-1/3 ${
          selected
            ? `${palette}`
            : `bg-stone-400 dark:bg-stone-500 contrast-more:bg-stone-800 dark:contrast-more:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "uppercase",
      regular: "uppercase",
      medium: "uppercase",
      large: "uppercase",
      _small: "rounded-none uppercase",
      _regular: "rounded-none uppercase",
      _medium: "rounded-none uppercase",
      _large: "rounded-none uppercase",
    },
    animate: {
      small: {
        borderRadius: 0,
      },
      regular: {
        borderRadius: 0,
      },
      medium: {
        borderRadius: 0,
      },
      large: {
        borderRadius: 0,
      },
    },
  },
  {
    type: "default",
    Icon: ({ selected, palette }) => (
      <div
        className={`w-16 h-16 absolute left-1/3 top-1/3 rounded-lg ${
          selected
            ? `${palette}`
            : `bg-stone-400 dark:bg-stone-500 contrast-more:bg-stone-800 dark:contrast-more:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "",
      regular: "",
      medium: "",
      large: "",
      _small: "rounded",
      _regular: "rounded-md",
      _medium: "rounded-lg",
      _large: "rounded-[.625rem]",
    },
    animate: {
      small: {
        borderRadius: 4,
      },
      regular: {
        borderRadius: 6,
      },
      medium: {
        borderRadius: 8,
      },
      large: {
        borderRadius: 10,
      },
    },
  },
  {
    type: "full",
    Icon: ({ selected, palette }) => (
      <div
        className={`w-12 h-12 absolute left-1/3 top-1/3 rounded-full ${
          selected
            ? `${palette}`
            : `bg-stone-400 dark:bg-stone-500 contrast-more:bg-stone-800 dark:contrast-more:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "!px-4",
      regular: "!px-4.5",
      medium: "!px-5",
      large: "!px-6 !py-2",
      _small: "rounded-full !px-4",
      _regular: "rounded-full !px-4.5",
      _medium: "rounded-full !px-5",
      _large: "rounded-full !px-6 !py-2",
    },
    animate: {
      small: {
        borderRadius: 100,
      },
      regular: {
        borderRadius: 100,
      },
      medium: {
        borderRadius: 100,
      },
      large: {
        borderRadius: 100,
      },
    },
  },
];

function ButtonRadius({ setCookie, selectedRadius, ...props }) {
  return (
    <RadioGroup
      value={selectedRadius}
      onChange={(value) => setCookie("selectedRadius", value)}
      className={
        "flex items-center justify-between space-x-4 mt-4 w-full tap-highlight-none"
      }
    >
      {radius.map(({ type, Icon }) => (
        <RadioGroup.Option
          value={type}
          key={`button.radius.${type}`}
          className={({ active, checked }) =>
            `rounded-full w-12 h-12 flex items-center justify-center transition ${
              checked
                ? `bg-stone-800 `
                : `bg-stone-200 dark:bg-stone-800 hover:opacity-80 cursor-pointer`
            } `
          }
        >
          <div className="relative w-12 h-12 overflow-hidden rounded-full">
            <Icon selected={selectedRadius === type} palette={props.palette} />
          </div>
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

export default ButtonRadius;
