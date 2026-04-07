import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif_Khmer } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSerifKhmer = Noto_Serif_Khmer({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Phnom Penh Plates — Where Tradition Meets the Table",
  description:
    "A premium Cambodian dining experience in the heart of BKK1, Phnom Penh. Rooted in Khmer tradition. Refined for tonight's table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${notoSerifKhmer.variable}`}>
      <body>{children}</body>
    </html>
  );
}
