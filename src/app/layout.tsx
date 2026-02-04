import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterBanner from "@/components/NewsletterBanner";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Star Paris Limousine | Expérience Prestige en Limousine Blanche de Luxe",
  description: "Vivez une expérience d'exception à Paris à bord d'une limousine blanche de 9 mètres. Anniversaire, EVJF, mariage — 2h de luxe pour jusqu'à 8 personnes.",
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
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
          <NewsletterBanner />
          <Header />
        </div>
        <main className="flex-1 pt-[180px] md:pt-[220px]">{children}</main>
        <NewsletterSection />
        <Footer />
      </body>
    </html>
  );
}
