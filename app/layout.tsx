import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand, siteBase } from "@/lib/data";

import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrschocobliss.com"),
  title: {
    default: `${brand.name} | Premium Handmade Chocolates`,
    template: `%s | ${brand.name}`
  },
  description:
    "Discover premium homemade chocolates, handcrafted gift boxes, custom chocolate gifting, and boutique chocolate hampers from HR's Choco Bliss in Vadodara, Gujarat.",
  keywords: [
    "premium homemade chocolates",
    "handcrafted chocolates",
    "custom chocolate gifting",
    "chocolate gift boxes",
    "Vadodara chocolate gifts",
    "HR's Choco Bliss"
  ],
  openGraph: {
    title: `${brand.name} | Premium Handmade Chocolates`,
    description:
      "Boutique handmade chocolates for gifting, celebrations, and premium custom orders in Vadodara.",
    images: [`${siteBase}/images/brand/hero-poster.png`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} bg-cream font-sans text-espresso antialiased`}>
        <div className="min-h-screen bg-[linear-gradient(180deg,#f7f0e7_0%,#f5ecdf_40%,#f9f4ee_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
