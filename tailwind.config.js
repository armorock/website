/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BB2034',
          dark: '#9D0000',
        },
        secondary: '#20242A',
        tertiary: '#7D7B7B',
        accent: '#8B0000',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
