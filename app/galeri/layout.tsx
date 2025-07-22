import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeri - Ersoylar Tarım ve Nakliyat | Fotoğraf Galerisi",
  description: "Ersoylar Tarım ve Nakliyat'ın çalışmalarından ve ürünlerinden fotoğraflar. Tarım arazilerimiz, ürünlerimiz ve hizmetlerimizden görüntüler.",
  keywords: "ersoylar tarım galeri, tarım ürünleri fotoğrafları, erzurum tarım fotoğrafları, tarım arazisi fotoğrafları, tarım ürünleri galeri",
  openGraph: {
    title: "Galeri - Ersoylar Tarım ve Nakliyat | Fotoğraf Galerisi",
    description: "Ersoylar Tarım ve Nakliyat'ın çalışmalarından ve ürünlerinden fotoğraflar. Tarım arazilerimiz, ürünlerimiz ve hizmetlerimizden görüntüler.",
    url: "https://ersoylartarimnakliyat.com/galeri",
    type: "website",
  }
}

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 