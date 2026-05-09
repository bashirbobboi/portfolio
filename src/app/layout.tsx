import type { Metadata } from "next";
import { Viaoda_Libre, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://bashir.is-a.dev"),
  title: "Mohammed Bobboi",
  description: "Mohammed Bobboi's Portfolio",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Mohammed Bobboi",
    description: "Mohammed Bobboi's Portfolio",
    type: "website",
    url: "https://bashir.is-a.dev",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Bobboi's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Bobboi",
    description: "Mohammed Bobboi's Portfolio",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full overflow-x-hidden", "antialiased", viaodaLibre.variable, openRunde.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
