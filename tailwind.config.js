/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      72: "400px",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("./node_modules/tw-elements/dist/plugin.cjs"),
    require("tailwind-scrollbar"),
  ],
  darkMode: "class",
};
