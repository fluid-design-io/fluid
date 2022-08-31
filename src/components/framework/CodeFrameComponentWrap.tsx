import clsxm from '@/lib/clsxm';
import React from 'react';

export const CodeFrameComponentWrap = ({ className = '', children }) => {
  return (
    <div
      className={clsxm(
        [
          'flex flex-col h-full flex-wrap items-center justify-center p-4 lg:p-6',
          'bg-primary-200/20 shadow-xl shadow-primary-300/50 dark:shadow-primary-900/20 dark:bg-black/20',
          'rounded-lg relative',
          'backdrop-blur',
        ],
        className
      )}
    >
      {children}
    </div>
  );
};
