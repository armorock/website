'use client';

import localFont from 'next/font/local';

export const knockout = localFont({
  src: [
    {
      path: '../../public/fonts/Knockout-Welterweight.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Knockout-Welterweight-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-knockout',
  display: 'swap',
});
