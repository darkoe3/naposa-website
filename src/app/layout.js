import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const metadataTitle = "NAPOSA | Nsaba Presbyterian Old Students Association";
const metadataDescription =
  "The official website of the Nsaba Presbyterian Old Students Association, connecting generations, supporting Nsaba Presbyterian Senior High School and building a lasting legacy.";
const productionUrl = "https://www.naposa.org";
const socialImageUrl = "/images/naposa/naposa-social-card.png";

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
  metadataBase: new URL(productionUrl),
  title: metadataTitle,
  description: metadataDescription,
  applicationName: "NAPOSA",
  keywords: [
    "NAPOSA",
    "Nsaba Presbyterian Old Students Association",
    "Nsaba Presbyterian Senior High School",
    "Agona Nsaba",
    "Alumni association Ghana",
    "Old students association",
    "Central Region Ghana",
  ],
  creator: "Nsaba Presbyterian Old Students Association",
  publisher: "Nsaba Presbyterian Old Students Association",
  category: "Alumni Association",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: "/",
    siteName: "NAPOSA",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "NAPOSA branded social sharing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [socialImageUrl],
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
