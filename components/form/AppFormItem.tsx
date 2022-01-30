import React from "react";

function AppFormItem({ error, focused, children, ...props }) {
  return (
    <div
      className={`rounded-lg overflow-hidden border relative mb-4 transition-colors ${
        !!error
          ? "border-red-400 prefers-contrast:border-red-500 dark:prefers-contrast:border-red-300"
          : focused
          ? `border-stone-200 prefers-contrast:border-stone-800 dark:prefers-contrast:border-amber-800`
          : `border-transparent prefers-contrast:border-stone-800 dark:prefers-contrast:border-stone-200`
      }  ${props.className ? props.className : ``}`}
    >
      {children}
    </div>
  );
}

export default AppFormItem;
