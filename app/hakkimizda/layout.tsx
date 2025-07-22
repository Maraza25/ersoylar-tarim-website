import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda - Ersoylar Tarım ve Nakliyat | 50+ Yıllık Deneyim",
  description: "1970'den beri Erzurum'un Yakutiye ilçesinde tarım ve nakliyat hizmetleri sunuyoruz. Yarım asırlık deneyimimizle kaliteli ürün ve hizmet garantisi veriyoruz.",
  keywords: "ersoylar tarım hakkında, erzurum tarım, yakutiye tarım, tarım şirketi, tarım ve nakliyat, 50 yıllık deneyim",
  openGraph: {
    title: "Hakkımızda - Ersoylar Tarım ve Nakliyat | 50+ Yıllık Deneyim",
    description: "1970'den beri Erzurum'un Yakutiye ilçesinde tarım ve nakliyat hizmetleri sunuyoruz. Yarım asırlık deneyimimizle kaliteli ürün ve hizmet garantisi veriyoruz.",
    url: "https://ersoylartarimnakliyat.com/hakkimizda",
    type: "website",
  }
}

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 