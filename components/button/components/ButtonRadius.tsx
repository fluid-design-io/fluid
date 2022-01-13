import Image from "next/image";

export const radius = [
  {
    type: "none",
    Icon: ({ selected }) => (
      <div
        className={`w-12 h-8 absolute left-1/3 top-1/3 ${
          selected
            ? `bg-sky-500 dark:bg-stone-200 prefers-contrast:bg-sky-600 dark:prefers-contrast:bg-sky-400`
            : `bg-stone-400 dark:bg-stone-500 prefers-contrast:bg-stone-800 dark:prefers-contrast:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "rounded-none",
      regular: "rounded-none",
      medium: "rounded-none",
      large: "rounded-none",
    },
  },
  {
    type: "default",
    Icon: ({ selected }) => (
      <div
        className={`w-12 h-8 absolute left-1/3 top-1/3 rounded-lg ${
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
  },
  {
    type: "full",
    Icon: ({ selected }) => (
      <div
        className={`w-8 h-8 absolute left-1/3 top-1/3 rounded-full ${
          selected
            ? `bg-sky-500 dark:bg-stone-200 prefers-contrast:bg-sky-600 dark:prefers-contrast:bg-sky-400`
            : `bg-stone-400 dark:bg-stone-500 prefers-contrast:bg-stone-800 dark:prefers-contrast:bg-stone-200`
        } `}
      />
    ),
    style: {
      small: "rounded-full",
      regular: "rounded-full",
      medium: "rounded-full",
      large: "rounded-full",
    },
  },
];

function ButtonRadius({ setSelectedRadius, selectedRadius, ...props }) {
  return (
    <div className="flex flex-row items-center justify-center w-full mt-4">
      {radius.map(({ type, Icon }) => (
        <button
          key={`button.radius.${type}`}
          className={`text-left w-full m-1 uppercase rounded-md px-4 py-1.5 text-sm font-medium tracking-wide ${
            selectedRadius !== type ? `button-gray-dark dark:hover:bg-stone-700` : `button-gray-light dark:prefers-contrast:bg-stone-200 dark:prefers-contrast:focus:bg-stone-200 dark:prefers-contrast:hover:bg-stone-200`
          }`}
          onClick={() => setSelectedRadius(type)}
        >
          <div className="relative w-8 h-8 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800 border-stone-300 dark:border-stone-600">
            <Icon selected={selectedRadius === type} />
          </div>
        </button>
      ))}
    </div>
  );
}

export default ButtonRadius;
