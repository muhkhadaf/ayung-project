import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayung Project - Jasa Desain Grafis Profesional | Branding & Web Design",
  description: "Ayung Project adalah jasa desain grafis profesional terpercaya di Indonesia. Spesialis branding, logo design, web design, packaging, dan solusi kreatif untuk bisnis Anda. Konsultasi gratis!",
  keywords: [
    "jasa desain grafis",
    "desain logo profesional",
    "branding Indonesia",
    "web design",
    "packaging design",
    "desain grafis murah",
    "jasa desain online",
    "creative agency",
    "Ayung Project"
  ],
  authors: [{ name: "Ayung Project" }],
  creator: "Ayung Project",
  publisher: "Ayung Project",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://ayungproject.com',
    siteName: 'Ayung Project',
    title: 'Ayung Project - Jasa Desain Grafis Profesional',
    description: 'Jasa desain grafis profesional terpercaya. Spesialis branding, logo design, web design, dan solusi kreatif untuk bisnis Anda.',
    images: [
      {
        url: '/Ayung_Project.png',
        width: 1200,
        height: 630,
        alt: 'Ayung Project - Professional Graphic Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayung Project - Jasa Desain Grafis Profesional',
    description: 'Jasa desain grafis profesional terpercaya. Spesialis branding, logo design, web design, dan solusi kreatif untuk bisnis Anda.',
    images: ['/Ayung_Project.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Design Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${ubuntu.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
