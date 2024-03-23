import type { Metadata } from "next";
import "./globals.css";
import { Happy_Monkey, Limelight } from "next/font/google";

const limelight = Limelight({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-limelight",
});

const happyMonkey = Happy_Monkey({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-happy-monkey",
});

export const metadata: Metadata = {
  title: "Havana Brown Fanciers - Home",
  description: "Havana Brown Fanciers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${limelight.variable} ${happyMonkey.variable} `}>
      <body>{children}</body>
    </html>
  );
}
