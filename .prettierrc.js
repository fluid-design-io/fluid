module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  importOrder: [
    // ext library & side effect imports
    ['^@?\\w', '^\\u0000'],
    // {s}css files
    ['^.+\\.s?css$'],
    // Lib and hooks
    ['^@/lib', '^@/hooks'],
    // static data
    ['^@/data'],
    // components
    ['^@/components', '^@/container'],
    // zustand store
    ['^@/store'],
    // Other imports
    ['^@/'],
    // relative paths up until 3 level
    [
      '^\\./?$',
      '^\\.(?!/?$)',
      '^\\.\\./?$',
      '^\\.\\.(?!/?$)',
      '^\\.\\./\\.\\./?$',
      '^\\.\\./\\.\\.(?!/?$)',
      '^\\.\\./\\.\\./\\.\\./?$',
      '^\\.\\./\\.\\./\\.\\.(?!/?$)',
    ],
    ['^@/types'],
    // other that didnt fit in
    ['^'],
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};