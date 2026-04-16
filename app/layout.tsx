import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/data";

import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asabuy.example.com"),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`
  },
  description: brand.description,
  keywords: [
    "stocktake app",
    "warehouse audit software",
    "barcode inventory counting",
    "excel stock reconciliation",
    "android ios warehouse app",
    "Asa Buy"
  ],
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description: brand.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} bg-slate-100 font-sans text-slate-900 antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_28%),linear-gradient(180deg,#f4f7fb_0%,#eef3f8_40%,#f8fbfd_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
