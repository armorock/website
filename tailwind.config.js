/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#20242a",
          200: "rgba(255, 255, 255, 0)",
        },
        black: "#000",
        gainsboro: {
          100: "#e6e6e6",
          200: "#d9d9d9",
          300: "rgba(230, 230, 230, 0)",
        },
        dimgray: "#54575e",
        firebrick: "#bb2034",
        indianred: "#e04759",
        whitesmoke: "#f4f4f4",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '479px' },
      mq825: { 'max': '825px' },
      mq750: { 'max': '750px' },
      mq675: { 'max': '675px' },
      mq450: { 'max': '450px' },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
