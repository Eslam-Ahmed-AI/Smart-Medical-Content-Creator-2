/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // تحسين الأداء
  compress: true,
  
  // إعدادات الصور
  images: {
    domains: [],
  },
  
  // إعدادات i18n للعربية
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },
  
  // Headers للأمان والأداء
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;