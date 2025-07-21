/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Sitemap.xml dosyasını public klasöründen sunmak için
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/public/sitemap.xml',
      },
    ]
  },
}

export default nextConfig
