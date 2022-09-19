const defaultTheme = require('tailwindcss/defaultTheme');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@fluid-design/fluid-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'ring-light-sm':
          '0 0 0 4px white, 0px 4px 45px -1px rgba(0, 0, 0, 0.08)',
        'ring-dark-sm':
          '0 0 0 4px #403b3a, 0px 4px 45px -1px rgba(0, 0, 0, 0.05)',
        'ring-transparent': '0 0 0 8px white, 0px 0px 0px 0px rgba(0, 0, 0, 0)',
        'ring-light': '0 0 0 8px white, 0px 4px 45px -1px rgba(0, 0, 0, 0.08)',
        'ring-dark': '0 0 0 8px #403b3a, 0px 4px 45px -1px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        'pointer-hover': { raw: '(hover: hover) and (pointer: fine)' },
        'pointer-touch': { raw: '(hover: none) and (pointer: coarse)' },
        sm: '767px',
        md: [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 898px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          { min: '668px', max: '767px' },
          { min: '898px' },
        ],
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        rounded: ['Nunito', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f2fbfd',
          100: '#d1f5fa',
          200: '#a8ebf5',
          300: '#98e1eb',
          400: '#68c6d4',
          500: '#40afbf',
          600: '#3093a1',
          700: '#207f8d',
          800: '#166c79',
          900: '#10525b',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca5b2',
          500: '#6b717a',
          600: '#565b62',
          700: '#34383c',
          800: '#27292b',
          900: '#111213',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@fluid-design/fluid-ui/src/plugin'),
  ],
};
