import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LossRunner by HAQ — stop chasing carriers for loss runs",
  description:
    "LossRunner runs the loss-run errand on its own — from request to filed report — so account managers stop babysitting carrier inboxes.",
  openGraph: {
    title: "LossRunner by HAQ",
    description:
      "Stop chasing carriers for loss runs. An agent that does the whole errand.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[var(--bg)]">{children}</body>
    </html>
  );
}
