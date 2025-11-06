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
  
  // ⚠️ حذفنا i18n لأنها بتسبب مشاكل مع Vercel
  // يمكنك التعامل مع العربية من خلال layout.js بدلاً منها
  
  // Headers للأمان والأداء
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;