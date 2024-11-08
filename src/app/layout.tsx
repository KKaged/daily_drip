import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daily Drip - Japan's Best Coffee Membership for Cafe Discounts",
  description:
    "Save on every cup! Daily Drip offers exclusive discounts at top cafes in Japan. Join today to enjoy daily savings, support local cafes, and elevate your coffee experience. Perfect for coffee lovers seeking affordable daily perks!",
  keywords:
    "coffee membership, cafe discounts Japan, save on coffee, Daily Drip, Japan coffee subscription, affordable cafes Japan, local cafe discounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
