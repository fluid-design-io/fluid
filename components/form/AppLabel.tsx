import React from "react";

function AppLabel({focused, error, errors, name, label}) {
  return (
    <label
      className={` ${
        focused
          ? !!error
            ? "text-red-400 prefers-contrast:text-stone-50"
            : `text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-900`
          : !!error
          ? `text-red-400  prefers-contrast:text-red-500 dark:prefers-contrast:text-red-300`
          : `text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50`
      } text-xs -mb-1 font-semibold absolute left-4 top-1 transition-colors`}
      htmlFor={name}
    >
      {!!error ? errors[name] : label}
    </label>
  );
}

export default AppLabel;
