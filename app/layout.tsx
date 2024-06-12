import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import {ReduxProvider} from "./provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dash",
  description: "Dash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
      <ReduxProvider>
          {children}
      </ReduxProvider>

      </body>
    </html>
  );
}
