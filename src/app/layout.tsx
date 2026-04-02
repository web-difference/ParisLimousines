import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

const GTM_ID = "GTM-5JD9D2H3";

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

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="flex min-h-screen flex-col antialiased bg-[#0a0a0a] text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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
