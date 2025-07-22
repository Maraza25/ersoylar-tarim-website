import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İletişim - Ersoylar Tarım ve Nakliyat | Bize Ulaşın",
  description: "Erzurum Yakutiye'de bulunan Ersoylar Tarım ve Nakliyat ile iletişime geçin. Tarım ürünleri ve nakliyat hizmetleri için 7/24 hizmetinizdeyiz.",
  keywords: "ersoylar tarım iletişim, tarım ürünleri iletişim, erzurum tarım iletişim, yakutiye tarım iletişim, tarım ve nakliyat iletişim",
  openGraph: {
    title: "İletişim - Ersoylar Tarım ve Nakliyat | Bize Ulaşın",
    description: "Erzurum Yakutiye'de bulunan Ersoylar Tarım ve Nakliyat ile iletişime geçin. Tarım ürünleri ve nakliyat hizmetleri için 7/24 hizmetinizdeyiz.",
    url: "https://ersoylartarimnakliyat.com/iletisim",
    type: "website",
  }
}

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 