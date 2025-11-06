import { Cairo } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-cairo',
});

export const metadata = {
  title: 'Smart Medical Content Creator',
  description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان على السوشيال ميديا في دقيقة واحدة',
  keywords: 'محتوى طبي, طب الأسنان, سوشيال ميديا, أطباء الأسنان, محتوى احترافي',
  authors: [{ name: 'Smart Medical Content Creator' }],
  creator: 'Smart Medical Content Creator',
  publisher: 'Smart Medical Content Creator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Smart Medical Content Creator',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
    type: 'website',
    locale: 'ar_EG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Medical Content Creator',
    description: 'أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `}
            </Script>
          </>
        )}
        
        {/* Vercel Analytics */}
        <Script
          src="https://va.vercel-scripts.com/v1/script.debug.js"
          strategy="afterInteractive"
          data-mode="auto"
        />
      </head>
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}