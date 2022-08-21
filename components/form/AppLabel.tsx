import React from "react";

function AppLabel({ focused, error, errors, name, label, value }) {
  const noErrorStyle =
    "text-primary-500 dark:text-primary-400 contrast-more:text-primary-900";
  const notFocusedStyle = value ? "" : "!text-base top-3.5 font-normal";
  return (
    <label
      className={` ${
        focused
          ? !!error
            ? "text-red-400 contrast-more:text-primary-50"
            : `${noErrorStyle} dark:contrast-more:text-primary-900`
          : !!error
          ? `text-red-400  contrast-more:text-red-500 dark:contrast-more:text-red-300`
          : `${notFocusedStyle} ${noErrorStyle} dark:contrast-more:text-primary-50`
      } -mb-1 text-xs font-semibold absolute left-4 top-1 transition-all pointer-events-none`}
      htmlFor={name}
    >
      {!!error ? errors[name] : label}
    </label>
  );
}

export default AppLabel;
