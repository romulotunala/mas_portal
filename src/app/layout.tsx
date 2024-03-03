import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mins. Anunciando Salvação",
  description: "Somos uma igreja que entende, à luz da Bíblia, que o amor, a graça e a salvação se estendem a todos.",
  icons: [{
    rel: "icon",
    url: "./favicon.ico",
    sizes: "any",
  }]
};

const { NEXT_PUBLIC_GOOGLE_ANALYTICS } = process.env;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
    </html>
  );
}
