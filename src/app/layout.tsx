import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { oswald, openSans } from "@/lib/utils/fonts";

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
        className={`${oswald.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
