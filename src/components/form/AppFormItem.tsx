import React from 'react';

function AppFormItem({ error, focused, children, ...props }) {
  return (
    <div
      className={`rounded-lg overflow-hidden border relative mb-4 transition-colors ${
        !!error
          ? 'border-red-400 contrast-more:border-red-500 dark:contrast-more:border-red-300'
          : focused
          ? `border-primary-200 contrast-more:border-primary-800 dark:contrast-more:border-amber-800`
          : `border-transparent contrast-more:border-primary-800 dark:contrast-more:border-primary-200`
      }  ${props.className ? props.className : ``}`}
    >
      {children}
    </div>
  );
}

export default AppFormItem;
