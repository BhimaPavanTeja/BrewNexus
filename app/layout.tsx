import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "../context/CartContext";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brew Nexus | Best Coffee Shop & Restobar in Cities",
  description: "Looking for the best restobar or a meeting place near you? Visit Brew Nexus for great coffee, ambiance, and more! Perfect for coffee lovers, work meetups, and social hangouts. Visit us near you today!",
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
        <CartProvider>
        {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
