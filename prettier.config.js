module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
    importOrder: [
        "^components/(.*)$",
        "^[./]"
    ],
    printWidth: 80,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
}