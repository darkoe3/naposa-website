import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL(site.canonicalUrl),
  title: "NAPOSA | Nsaba Presbyterian Old Students Association",
  description:
    "The official website of the Nsaba Presbyterian Old Students Association, connecting generations, supporting Nsaba Presbyterian Senior High School and building a lasting legacy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NAPOSA | Nsaba Presbyterian Old Students Association",
    description:
      "Connecting generations, supporting Nsaba Presbyterian Senior High School and building a lasting legacy.",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: "/images/naposa/naposa-logo.jpg",
        width: 1200,
        height: 630,
        alt: "NAPOSA logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAPOSA | Nsaba Presbyterian Old Students Association",
    description:
      "The official website of the Nsaba Presbyterian Old Students Association.",
    images: ["/images/naposa/naposa-logo.jpg"],
  },
  icons: {
    icon: "/images/naposa/naposa-logo.jpg",
    shortcut: "/images/naposa/naposa-logo.jpg",
    apple: "/images/naposa/naposa-logo.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GH" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
