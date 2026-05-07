import type { Metadata } from "next";
import { Viaoda_Libre, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const viaodaLibre = Viaoda_Libre({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-viaoda-libre",
  display: "swap",
});

const openRunde = localFont({
  src: [
    { path: "./fonts/OpenRunde-Regular.woff2", weight: "400" },
    { path: "./fonts/OpenRunde-Medium.woff2", weight: "500" },
    { path: "./fonts/OpenRunde-Semibold.woff2", weight: "600" },
    { path: "./fonts/OpenRunde-Bold.woff2", weight: "700" },
  ],
  variable: "--font-open-runde",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Bobboi",
  description: "Mohammed Bobboi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", viaodaLibre.variable, openRunde.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
