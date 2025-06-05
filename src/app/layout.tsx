import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { knockout } from "@/lib/utils/fonts";
import { Roboto } from "next/font/google";

// Fallback font for body text
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Armorock | Polymer Concrete Solutions",
  description: "Sustainable in design. Proven in performance. Trusted for the future.",
  keywords: "polymer concrete, corrosion-resistant, sustainable, waste water industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${knockout.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
