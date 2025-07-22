"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin, Menu, X, Wheat, Truck, Globe } from "lucide-react"
import { Image } from 'antd'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { useSearchParams } from 'next/navigation'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("anasayfa")
  const [visiblePhotos, setVisiblePhotos] = useState(6)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const searchParams = useSearchParams()

  const products = [
    {
      name: "Yonca",
      description: "Yüksek protein değeri ile hayvan yemi olarak ideal",
      image: "/product/yonca.png",
    },
    {
      name: "Yulaf",
      description: "Besleyici ve sağlıklı tahıl ürünü",
      image: "/product/yulaf.jpg",
    },
    {
      name: "Çayır Otu",
      description: "Kaliteli çayır otu ürünleri",
      image: "/product/cayir-otu.jpeg",
    },
    {
      name: "Korunga",
      description: "Kaliteli hayvan yemi için mükemmel seçim",
      image: "/product/korunga.webp",
    },
    {
      name: "Buğday",
      description: "Birinci sınıf buğday çeşitleri",
      image: "/product/bugday.jpeg",
    },
    {
      name: "Arpa",
      description: "Yem ve gıda sanayisi için kaliteli arpa",
      image: "/product/arpa.jpg",
    },
    {
      name: "Çavdar",
      description: "Organik çavdar ürünleri",
      image: "/product/cavdar.png",
    },
    {
      name: "Güneş Çekirdeği",
      description: "Doğal ve taze güneş çekirdeği",
      image: "/product/gunes-cekirdegi.jpeg",
    },
    {
      name: "Fasulye",
      description: "Taze ve kaliteli fasulye çeşitleri",
      image: "/product/fasulye.jpeg",
    },
    {
      name: "Mercimek",
      description: "Protein açısından zengin mercimek",
      image: "/product/yesil-mercimek.jpg",
    },
    {
      name: "Buğday Samanı",
      description: "Hayvan yemi için kaliteli saman",
      image: "/product/bugday-saman.jpeg",
    },
    {
      name: "Mercimek Samanı",
      description: "Besleyici mercimek samanı",
      image: "/product/mercimek-saman.jpg",
    },
  ]

  const galleryPhotos = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",
    "/gallery/4.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.jpeg",
    "/gallery/9.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",

  ]

  const sendWhatsAppMessage = (productName: string) => {
    const message = `Merhaba, ${productName} ürününüz hakkında bilgi almak istiyorum.`
    const whatsappUrl = `https://wa.me/905386235825?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["anasayfa", "hakkimizda", "urunler", "iletisim", "galeri"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(section)
        }, 100)
      }
    }
  }, [searchParams])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      // URL'i güncelle ama sayfayı yeniden yükleme
      window.history.pushState({}, '', `/${sectionId === 'anasayfa' ? '' : sectionId}`)
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpeg" alt="Ersoylar Tarım ve Nakliyat" width={64} height={64} />
              <h1 className="text-xl font-bold text-gray-800">Ersoylar Tarım ve Nakliyat</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "anasayfa", label: "Anasayfa" },
                { id: "hakkimizda", label: "Hakkımızda" },
                { id: "urunler", label: "Ürünler" },
                { id: "iletisim", label: "İletişim" },
                { id: "galeri", label: "Galeri" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium ${
                    activeSection === item.id ? "text-green-600 border-b-2 border-green-600" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                {[
                  { id: "anasayfa", label: "Anasayfa" },
                  { id: "hakkimizda", label: "Hakkımızda" },
                  { id: "urunler", label: "Ürünler" },
                  { id: "iletisim", label: "İletişim" },
                  { id: "galeri", label: "Galeri" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="anasayfa" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Kaliteli Tarım
                <span className="text-green-600 block">Ürünleri</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Erzurum'dan tüm Türkiye'ye ve dünyaya kaliteli tarım ürünleri sunuyoruz. Doğal ve taze ürünlerimizle
                sofranıza değer katıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("urunler")}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Ürünlerimizi İncele
                </button>
                <button
                  onClick={() => scrollToSection("iletisim")}
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  İletişime Geç
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ersoylar-tarim-home.jpg"
                alt="Tarım Alanları"
                className="rounded-2xl shadow-2xl w-full max-w-[600px] h-auto object-cover ml-auto animate-fade-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Yurtiçi & Yurtdışı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hakkımızda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              1970 yılından beri Erzurum'un Yakutiye ilçesi Yeşilyayla Mahallesi'nin bereketli topraklarında üretim yapmaktayız. 
              Ürünlerimizin biçim ve balyalama işlemleri zamanında yapılmakta olup, herhangi bir nem veya ısınma sorunu yaşanmamaktadır. 
              Yarım asırlık deneyimimizle sizlere en kaliteli hizmeti sunmak için var gücümüzle çalışmaktayız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
              <Wheat className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">50+ Yıllık Deneyim</h3>
              <p className="text-gray-600">
                1970'den beri süregelen tarım tecrübemizle kaliteli üretim yapıyoruz.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
              <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Zamanında Teslimat</h3>
              <p className="text-gray-600">
                Ürünlerimizin biçim ve balyalama işlemleri zamanında yapılarak sizlere ulaştırılır.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600">
                Nem ve ısınma sorunları olmayan, kaliteli ürünler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Section */}
      <section id="urunler" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ürünlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erzurum'un bereketli topraklarından çıkan kaliteli tarım ürünlerimizi yurtiçi ve yurtdışına güvenle
              gönderiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(product.image)}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow min-h-[3rem]">{product.description}</p>
                  <button
                    onClick={() => sendWhatsAppMessage(product.name)}
                    className="w-full bg-green-600 text-white py-1.5 px-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm"
                  >
                    <FaWhatsapp className="h-3.5 w-3.5" />
                    <span>İletişime Geç</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Ürün Modal */}
          {selectedProduct && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <div className="relative max-w-[800px] max-h-[80vh] w-full h-auto">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
                <img
                  src={selectedProduct}
                  alt="Ürün Detay"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <div className="bg-green-600 text-white p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Geniş Dağıtım Ağı</h3>
              <p className="text-green-100">
                Tüm ürünlerimiz yurtiçi ve yurtdışı pazarlara güvenle gönderilmektedir. Kalite garantisi ile teslim
                ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section id="galeri" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fotoğraf Galerisi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Çalışmalarımızdan ve ürünlerimizden kareler.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Image.PreviewGroup>
              {galleryPhotos.slice(0, visiblePhotos).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Image
                    src={photo || "/placeholder.svg"}
                    alt={`Galeri ${index + 1}`}
                    className="w-full h-full object-cover"
                    preview={{
                      mask: (
                        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 transition-opacity duration-300">
                          <span className="text-white">Görüntüle</span>
                        </div>
                      ),
                    }}
                  />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>

          {visiblePhotos < galleryPhotos.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisiblePhotos((prev) => Math.min(prev + 6, galleryPhotos.length))}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Daha Fazla Göster ({galleryPhotos.length - visiblePhotos} kaldı)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* İletişim Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">İletişim</h2>
            <p className="text-xl text-gray-600">Bizimle iletişime geçin, size en iyi hizmeti sunalım.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <a href="tel:+905359747912" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <Phone className="h-6 w-6 text-green-600" />
                </a>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                  <p className="text-gray-600">
                    <a href="tel:+905359747912" className="hover:text-green-600 transition-colors">
                      Ziyafettin Ersoy - +90 535 974 79 12
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="https://wa.me/905386235825" target="_blank" rel="noopener noreferrer" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <FaWhatsapp className="h-6 w-6 text-green-600" />
                </a>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                  <p className="text-gray-600">
                    <a href="https://wa.me/905386235825" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      Emirhan Ersoy - +90 538 623 58 25
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaFacebook className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Facebook</h3>
                  <p className="text-gray-600">
                    <a href="https://www.facebook.com/profile.php?id=61577982454225" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      @bahadirersoy
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="https://maps.app.goo.gl/6kV7PrEtZBNvJH2t8" target="_blank" rel="noopener noreferrer" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <MapPin className="h-6 w-6 text-green-600" />
                </a>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Adres</h3>
                  <p className="text-gray-600">
                    <a href="https://maps.app.goo.gl/6kV7PrEtZBNvJH2t8" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                      Yeşilyayla Mahallesi
                      <br />
                      Yakutiye, Erzurum
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4211.416575215251!2d41.28440107599269!3d40.049266971501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAyJzU3LjQiTiA0McKwMTcnMTMuMSJF!5e1!3m2!1str!2str!4v1753134913866!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ersoylar Tarım ve Nakliyat Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wheat className="h-8 w-8 text-green-400" />
                <h3 className="text-xl font-bold">Ersoylar Tarım ve Nakliyat</h3>
              </div>
              <p className="text-gray-300">Erzurum'dan dünyaya kaliteli tarım ürünleri sunuyoruz.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
              <div className="space-y-2">
                {[
                  { id: "anasayfa", label: "Anasayfa" },
                  { id: "hakkimizda", label: "Hakkımızda" },
                  { id: "urunler", label: "Ürünler" },
                  { id: "iletisim", label: "İletişim" },
                  { id: "galeri", label: "Galeri" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  <a href="tel:+905359747912" className="hover:text-green-400 transition-colors">
                    Ziyafettin Ersoy - +90 535 974 79 12
                  </a>
                </p>
                <p>
                  <a href="https://maps.app.goo.gl/6kV7PrEtZBNvJH2t8" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    Yeşilyayla Mahallesi, Yakutiye, Erzurum
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ersoylar Tarım ve Nakliyat. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/905386235825"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 animate-[bounce_1s_cubic-bezier(0.68,-0.55,0.265,1.55)_infinite] sm:p-4"
      >
        <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  )
}
