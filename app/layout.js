import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "COS - Cleaning & Organization Solutions | Professional Cleaning Services in South Florida",
  description: "Professional cleaning and organization services in South Florida with 7+ years of experience. Residential, commercial, deep cleaning, and more. Call (954) 654-6628 for a free estimate.",
  keywords: "cleaning services, professional cleaning, South Florida cleaning, organization services, deep cleaning, office cleaning, residential cleaning",
  openGraph: {
    title: "COS - Cleaning & Organization Solutions",
    description: "Professional cleaning services in South Florida with 7+ years of excellence",
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
