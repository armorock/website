// This file exports all style module objects for easy importing throughout the app

// Constants for theme values
export const COLORS = {
  primary: 'var(--primary)',
  primaryDark: 'var(--primary-dark)',
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  accent: 'var(--accent)',
  white: 'var(--white)',
  background: 'var(--background)',
  foreground: 'var(--foreground)',
};

// Button style variants
export const BUTTONS = {
  primary: 'btn btn-primary',
  outline: 'btn btn-outline',
  outlineRed: 'btn btn-outline-red',
  quoteLarge: 'px-8 py-1.5 border-[3px] text-xl font-oswald font-bold uppercase bg-transparent transition-colors duration-200 tracking-wide',
};

// Header style variants
export const HEADER = {
  transparent: 'header header-transparent',
  scrolled: 'header header-scrolled',
  navLink: 'nav-link',
  navLinkActive: 'nav-link nav-link-active',
};

// Common layout styles
export const LAYOUT = {
  container: 'container-custom',
  section: 'section',
  grid2Cols: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  grid3Cols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  grid4Cols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
};

// Typography styles
export const TYPOGRAPHY = {
  headingLg: 'text-5xl md:text-6xl font-bold uppercase tracking-wide',
  headingMd: 'text-4xl md:text-5xl font-bold uppercase tracking-wide',
  headingSm: 'text-3xl md:text-4xl font-bold uppercase tracking-wide',
  subheading: 'text-xl md:text-2xl font-semibold',
  textLg: 'text-lg leading-relaxed',
  textMd: 'text-base leading-relaxed',
  textSm: 'text-sm leading-relaxed',
};

// Form styles
export const FORMS = {
  group: 'mb-4',
  label: 'block mb-2 font-medium text-gray-700',
  input: 'w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]',
  textarea: 'w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]',
  select: 'w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]',
  checkbox: 'rounded-none text-[var(--primary)] focus:ring-[var(--primary)]',
};

// Animation classes
export const ANIMATIONS = {
  fadeIn: 'fade-in',
  slideIn: 'slide-in',
};

// Hero section styles
export const HERO = {
  section: 'w-full h-screen relative bg-cover bg-center bg-no-repeat',
  overlay: 'absolute inset-0 bg-black bg-opacity-40',
  content: 'container-custom h-full flex flex-col justify-center items-start relative z-10 text-white',
};
