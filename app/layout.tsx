import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ysmael Noche - Portfolio",
  description: "Professional portfolio showcasing my work, achievements, and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark:bg-gray-900 overflow-x-hidden">
      <body className={`${inter.className} bg-white dark:bg-gray-900 overflow-x-hidden`}>
        <Navigation />
        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}
