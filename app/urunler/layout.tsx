import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ürünlerimiz - Ersoylar Tarım ve Nakliyat | Kaliteli Tarım Ürünleri",
  description: "Yonca, yulaf, buğday, arpa, çavdar, fasulye, mercimek ve daha fazlası. Erzurum'dan tüm Türkiye'ye kaliteli tarım ürünleri tedarik ediyoruz.",
  keywords: "yonca, yulaf, buğday, arpa, çavdar, fasulye, mercimek, tarım ürünleri, toptan tarım ürünleri, erzurum tarım ürünleri",
  openGraph: {
    title: "Ürünlerimiz - Ersoylar Tarım ve Nakliyat | Kaliteli Tarım Ürünleri",
    description: "Yonca, yulaf, buğday, arpa, çavdar, fasulye, mercimek ve daha fazlası. Erzurum'dan tüm Türkiye'ye kaliteli tarım ürünleri tedarik ediyoruz.",
    url: "https://ersoylartarimnakliyat.com/urunler",
    type: "website",
  }
}

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 