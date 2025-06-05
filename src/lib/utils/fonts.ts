'use client';

import { Oswald, Open_Sans } from 'next/font/google';

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'], // Medium and Bold
  variable: '--font-oswald',
  display: 'swap',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold
  variable: '--font-open-sans',
  display: 'swap',
});
