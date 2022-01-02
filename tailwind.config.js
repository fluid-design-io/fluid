module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        'prefers-contrast': { 'raw': '(prefers-contrast: more)' },
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}