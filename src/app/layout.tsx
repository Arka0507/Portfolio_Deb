import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/common/LenisProvider";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arka-deb.vercel.app"),
  title: "Arka Deb | Data Analyst & Machine Learning Developer",
  description:
    "Official portfolio of Arka Deb — Data Analyst, Data Scientist & Machine Learning Developer. Turning complex data into actionable business strategy through analytics, federated AI, and agentic workflows.",
  keywords: [
    "Arka Deb",
    "Data Scientist",
    "Machine Learning Developer",
    "Data Analyst",
    "Federated Learning",
    "Agentic AI",
    "BioBERT",
    "FastAPI",
    "Python",
    "Kolkata",
    "Portfolio",
  ],
  authors: [{ name: "Arka Deb", url: "https://github.com/Arka0507" }],
  creator: "Arka Deb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arka-deb.vercel.app",
    title: "Arka Deb | Data Analyst & Machine Learning Developer",
    description:
      "Turning complex data into actionable business strategy. Explore flagship systems in Federated Learning, Recommendation Engines, and LLM Agentic Architectures.",
    siteName: "Arka Deb Portfolio",
    images: [
      {
        url: "/images/arka-deb-profile.jpg",
        width: 800,
        height: 800,
        alt: "Arka Deb - Data Scientist and Machine Learning Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arka Deb | Data Analyst & Machine Learning Developer",
    description: "Turning complex data into actionable business strategy.",
    images: ["/images/arka-deb-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#080808] text-white antialiased min-h-screen selection:bg-accent-red/30">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
