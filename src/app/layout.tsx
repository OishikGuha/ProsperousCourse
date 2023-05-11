"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosperous Course",
  description: "Learn how to be successful.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Prosperous Course</title>
        <link
          rel="icon"
          href="/icons/favicon-32x32.png"
          type="image/x-icon"
          sizes="any"
        />
      </head>
      <body
        className={inter.className + " bg-[#121212] w-full overflow-x-hidden"}
      >
        {children}
      </body>
    </html>
  );
}
