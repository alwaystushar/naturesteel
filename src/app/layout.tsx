import type { Metadata } from "next";
import "./globals.css";
import { SeoStructuredData } from "./components/SeoStructuredData";

const BASE = "https://www.naturesteel.in";
const TITLE = "Nature Steel | Precision Steel Detailing & Structural Engineering";
const DESCRIPTION =
  "Nature Steel delivers precision-driven steel detailing, 3D modeling, and fabrication drawings for USA & Canada. On-time delivery, global code compliance (IS, BS Euro, AISC), and dedicated project coordination.";
const KEYWORDS = [
  "steel detailing",
  "structural detailing",
  "Tekla Structures",
  "fabrication drawings",
  "shop drawings",
  "erection drawings",
  "3D modeling",
  "BIM",
  "Nature Steel",
  "ABM",
  "steel detailing India",
  "commercial steel",
  "industrial steel",
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: TITLE,
    template: "%s | Nature Steel",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Nature Steel", url: BASE }],
  creator: "Nature Steel",
  publisher: "Nature Steel",
  applicationName: "Nature Steel",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Nature Steel",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/logo.svg",
        width: 400,
        height: 80,
        alt: "Nature Steel - Precision Steel Detailing & Structural Engineering",
      },
      {
        url: "/assets/services.jpg",
        width: 1200,
        height: 630,
        alt: "Steel detailing and structural engineering services - Nature Steel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/services.jpg"],
    creator: "@naturesteel",
  },
  icons: {
    icon: [
      { url: "/assets/fav.png", type: "image/x-icon" },
      { url: "/assetsfav.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/fav.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/fav.png",
  },
  category: "Steel Detailing & Structural Engineering",
  other: {
    "theme-color": "#0d9488",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={BASE} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />
        <SeoStructuredData />
      </head>
      <body className="antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
