import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HNG 12 Ticket Generator",
  description: "Model ticket generator for HNG 12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Road+Rage&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`relative h-full ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="mt-32">{children}</div>
      </body>
    </html>
  );
}
