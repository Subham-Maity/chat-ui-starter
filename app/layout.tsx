import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import {ReduxProvider} from "./provider";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
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
          <NextUIProvider>
          {children}
          </NextUIProvider>
      </ReduxProvider>

      </body>
    </html>
  );
}
