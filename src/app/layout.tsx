import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Black_Ops_One, Fira_Sans } from 'next/font/google'; 
import AOSInit from "./AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackOps = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-blackops',
});

const firaSans = Fira_Sans({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-firasans',
});

export const metadata: Metadata = {
  title: "Portofolio Ibnu Zaidan Akbar",
  description: "Portofolio Ibnu Zaidan Akbar as Informatics Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blackOps.variable} ${firaSans.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
