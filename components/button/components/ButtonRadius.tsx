import { RadioGroup } from "@headlessui/react";
import Image from "next/image";

export const radius = [
  {
    type: "none",
    Icon: ({ selected }) => (
      <div
        className={`w-16 h-16 absolute left-1/3 top-1/3 ${
          selected
            ? `bg-sky-500 dark:bg-stone-200 prefers-contrast:bg-sky-600 dark:prefers-contrast:bg-sky-400`
            : `bg-stone-400 dark:bg-stone-500 prefers-contrast:bg-stone-800 dark:prefers-contrast:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "rounded-none uppercase",
      regular: "rounded-none uppercase",
      medium: "rounded-none uppercase",
      large: "rounded-none uppercase",
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
    Icon: ({ selected }) => (
      <div
        className={`w-16 h-16 absolute left-1/3 top-1/3 rounded-lg ${
          selected
            ? `bg-sky-500 dark:bg-stone-200 prefers-contrast:bg-sky-600 dark:prefers-contrast:bg-sky-400`
            : `bg-stone-400 dark:bg-stone-500 prefers-contrast:bg-stone-800 dark:prefers-contrast:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "rounded",
      regular: "rounded-md",
      medium: "rounded-lg",
      large: "rounded-[.625rem]",
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
    Icon: ({ selected }) => (
      <div
        className={`w-12 h-12 absolute left-1/3 top-1/3 rounded-full ${
          selected
            ? `bg-sky-500 dark:bg-stone-200 prefers-contrast:bg-sky-600 dark:prefers-contrast:bg-sky-400`
            : `bg-stone-400 dark:bg-stone-500 prefers-contrast:bg-stone-800 dark:prefers-contrast:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "rounded-full !px-4",
      regular: "rounded-full !px-4.5",
      medium: "rounded-full !px-5",
      large: "rounded-full !px-6 !py-2",
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

function ButtonRadius({ setSelectedRadius, selectedRadius, ...props }) {
  return (
    <RadioGroup
      value={selectedRadius}
      onChange={setSelectedRadius}
      className={"flex items-center justify-between space-x-4 mt-4 w-full tap-highlight-none"}
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
            <Icon selected={selectedRadius === type} />
          </div>
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

export default ButtonRadius;
