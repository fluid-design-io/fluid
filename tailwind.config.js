const defaultTheme = require('tailwindcss/defaultTheme');
const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@fluid-design/fluid-ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'ring-light-sm': '0 0 0 4px white, 0px 4px 45px -1px rgba(0, 0, 0, 0.08)',
        'ring-dark-sm': '0 0 0 4px #403b3a, 0px 4px 45px -1px rgba(0, 0, 0, 0.05)',
        'ring-transparent': '0 0 0 8px white, 0px 0px 0px 0px rgba(0, 0, 0, 0)',
        'ring-light': '0 0 0 8px white, 0px 4px 45px -1px rgba(0, 0, 0, 0.08)',
        'ring-dark': '0 0 0 8px #403b3a, 0px 4px 45px -1px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        'pointer-hover': { 'raw': '(hover: hover) and (pointer: fine)' },
        'pointer-touch': { 'raw': '(hover: none) and (pointer: coarse)' },
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        rounded: ['Nunito', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
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
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('@fluid-design/fluid-ui/src/plugin')],
}