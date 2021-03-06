export const getInputColor = ({ error, className = undefined }) =>
  `bg-none pt-5 pb-1.5 px-4 outline-none block bg-white dark:bg-stone-900 dark:prefers-contrast:bg-black  w-full dark:text-stone-200 dark:prefers-contrast:text-stone-50 transition prefers-contrast:placeholder:text-stone-700  dark:prefers-contrast:placeholder:text-stone-50/75 [-webkit-tap-highlight-color:transparent] ${
    !!error
      ? `prefers-contrast:focus-within:bg-red-500 dark:prefers-contrast:focus-within:bg-red-600 prefers-contrast:focus-within:placeholder:text-stone-50`
      : `prefers-contrast:focus-within:bg-amber-400 dark:prefers-contrast:focus-within:bg-amber-300 prefers-contrast:focus-within:placeholder:text-stone-900 dark:prefers-contrast:focus-within:text-stone-900`
  } ${className}`;
