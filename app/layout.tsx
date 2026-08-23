import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";



const SITE_URL = "https://invictus.rw";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Invictus | Loan Management System for Microfinance & SACCOs in Rwanda",
    template: "%s | Invictus",
  },
  description:
    "Invictus is a modern loan management system for microfinance institutions, SACCOs, and lenders in Rwanda and East Africa. Manage customers, loan applications, approvals, disbursements, repayments, penalties, accounting, and portfolio reporting from one secure platform.",
  keywords: [
    "loan management software",
    "microfinance software",
    "SACCO loan management",
  ],
  authors: [{ name: "Invictus" }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/logos/favicon/favicon.ico", sizes: "any" },
      {
        url: "/logos/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/logos/favicon/favicon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/logos/favicon/favicon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/logos/favicon/favicon-180x180.png",
  },
  openGraph: {
    type: "website",
    siteName: "Invictus",
    title:
      "Invictus — Loan Management for Modern Financial Institutions",
    description:
      "Manage customers, loan applications, approvals, disbursements, repayments, accounting, and portfolio performance on one secure platform.",
    url: SITE_URL,
    locale: "en_RW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invictus — Loan Management System for Financial Institutions",
    description:
      "Modern loan management for microfinance institutions, SACCOs, and lenders in Rwanda and East Africa.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#065F46",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Invictus",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "Modern loan management system for microfinance institutions, SACCOs, and lenders in Rwanda and East Africa.",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact sales for pricing",
  },
};

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(geist.variable, "font-sans min-h-screen bg-white antialiased")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster theme="light" position="bottom-right" richColors />
      </body>
    </html>
  );
}
