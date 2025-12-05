import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Lazar Petkovic - Webflow Developer & Designer",
    template: "%s | Lazar Petkovic",
  },
  description:
    "Freelance Webflow developer and designer specializing in creating beautiful, high-performance websites. View my portfolio of 20+ successful projects including real estate, restaurants, logistics, and interior design.",
  keywords: [
    "Webflow Developer",
    "Webflow Designer",
    "Freelance Web Developer",
    "Lazar Petkovic",
    "Web Design",
    "Portfolio",
    "Serbia",
    "Webflow Expert",
    "Custom Websites",
    "Responsive Design",
  ],
  authors: [{ name: "Lazar Petkovic" }],
  creator: "Lazar Petkovic",
  openGraph: {
    title: "Lazar Petkovic - Webflow Developer & Designer",
    description:
      "Freelance Webflow developer creating beautiful, high-performance websites. 20+ projects delivered with 100% client satisfaction.",
    type: "website",
    locale: "en_US",
    siteName: "Lazar Petkovic Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
        {children}
      </body>
    </html>
  );
}
