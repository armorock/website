import "./global.css";
import { ReactNode } from "react";
import DesktopViewport from "../components/DesktopViewport";
import ViewportDebug from "../components/ViewportDebug";

export const metadata = {
  title: `Website`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* This viewport meta will be dynamically updated by DesktopViewport component */}
        <meta name="viewport" content="width=1440, initial-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-open-sans">
        <DesktopViewport />
        {children}
        <ViewportDebug />
      </body>
    </html>
  );
}
