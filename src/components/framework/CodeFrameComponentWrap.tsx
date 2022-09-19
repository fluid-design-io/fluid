import React from 'react';

import clsxm from '@/lib/clsxm';

export const CodeFrameComponentWrap = ({ className = '', children }) => {
  return (
    <div
      className={clsxm(
        [
          'flex flex-col h-full flex-wrap items-center justify-center p-4 lg:p-6',
          'bg-gray-200/20 shadow-xl shadow-gray-300/50 dark:shadow-gray-900/20 dark:bg-black/20',
          'rounded-lg relative contrast:ring-1 contrast:ring-gray-600 dark:contrast:ring-gray-400',
          'backdrop-blur',
        ],
        className
      )}
    >
      {children}
    </div>
  );
};
