import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
