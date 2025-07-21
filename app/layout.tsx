import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ersoylar Tarım ve Nakliyat - Kaliteli Tarım Ürünleri",
  description:
    "Erzurum'dan tüm Türkiye'ye ve dünyaya kaliteli tarım ürünleri sunuyoruz. Yonca, yulaf, buğday, arpa ve daha fazlası.",
  keywords: "tarım, nakliyat, erzurum, yonca, yulaf, buğday, arpa, çavdar, fasulye, mercimek",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
