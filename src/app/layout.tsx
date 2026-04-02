import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.star-limousine-paris.com"),
  title: "Star Limousine Paris | Expérience Prestige en Limousine Blanche de Luxe",
  description: "Vivez une expérience d'exception à Paris à bord d'une limousine blanche de 9 mètres. Anniversaire, EVJF, mariage — 2h de luxe pour jusqu'à 8 personnes.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased bg-[#0a0a0a] text-white">
        <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0a0a]">
          <Header />
        </div>
        <main className="flex-1 pt-24 md:pt-[220px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
