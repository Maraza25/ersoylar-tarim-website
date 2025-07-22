import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Ersoylar Tarım ve Nakliyat - Kaliteli Tarım Ürünleri | Erzurum",
  description: "Erzurum'dan tüm Türkiye'ye kaliteli tarım ürünleri tedariki. Yonca, yulaf, buğday, arpa, çavdar, fasulye ve mercimek ürünlerimizle hizmetinizdeyiz. Toptan ve perakende satış imkanları.",
  keywords: "tarım ürünleri, nakliyat, erzurum tarım, yonca, yulaf, buğday, arpa, çavdar, fasulye, mercimek, toptan tarım ürünleri, perakende tarım ürünleri",
  authors: [{ name: "Ersoylar Tarım ve Nakliyat" }],
  openGraph: {
    title: "Ersoylar Tarım ve Nakliyat - Kaliteli Tarım Ürünleri | Erzurum",
    description: "Erzurum'dan tüm Türkiye'ye kaliteli tarım ürünleri tedariki. Yonca, yulaf, buğday, arpa, çavdar, fasulye ve mercimek ürünlerimizle hizmetinizdeyiz.",
    url: "https://ersoylartarimnakliyat.com",
    siteName: "Ersoylar Tarım ve Nakliyat",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console doğrulama kodu eklenecek
  },
  alternates: {
    canonical: "https://ersoylartarimnakliyat.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="handle-hash-navigation" strategy="afterInteractive">
          {`
            function handleHashNavigation() {
              if (window.location.hash) {
                const element = document.querySelector(window.location.hash);
                if (element) {
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }
            }

            // İlk yüklemede çalıştır
            window.addEventListener('load', handleHashNavigation);

            // Hash değiştiğinde çalıştır
            window.addEventListener('hashchange', handleHashNavigation);
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
