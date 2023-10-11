/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "1/2": "370px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      "05": "1.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("./node_modules/tw-elements/dist/plugin.cjs"),
    require("tailwind-scrollbar"),
  ],
  darkMode: "class",
};
