// Armorock theme extension for tailwind
module.exports = {
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
    boxShadow: {
      header: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-in': 'slideIn 0.5s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideIn: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
};
