import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({ 
  subsets: ["latin"],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "For You, My Love | A Valentine's Gift",
  description: "A handcrafted Valentine's Day experience filled with our memories, promises, and love.",
  openGraph: {
    title: "A Love Letter For You",
    description: "An interactive journey through our story together",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
