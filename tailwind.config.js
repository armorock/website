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
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
