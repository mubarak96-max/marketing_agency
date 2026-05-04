import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import PageTracking from '@/components/analytics/Analytics';
import { organizationSchema, siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: 'Website Development Company in Uganda | MM Tech Spot',
  description: 'MM Tech Spot is a Uganda web development, mobile app development, and digital marketing company helping businesses in Kampala and across Uganda grow online.',
  keywords: 'website development company Uganda, web development company Uganda, mobile app development company Uganda, digital marketing company Uganda, website developers Uganda',
  manifest: '/manifest.json',
  robots: 'index, follow',
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    title: 'Website Development Company in Uganda | MM Tech Spot',
    description: 'Website development, mobile app development, PPC, and digital marketing services for businesses in Kampala and across Uganda.',
    images: ['/images/og-image.jpg'],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Uganda | MM Tech Spot',
    description: 'Website development, app development, and digital marketing in Uganda.',
    images: ['/images/twitter-card.jpg'],
  },
  icons: {
    icon: '/favicon.svg?v=2',
    apple: '/icons/icon-192x192.png',
    shortcut: '/icons/icon-192x192.png',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563EB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* PWA Meta Tags */}
        <meta name="application-name" content={siteConfig.brandName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.brandName} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1a1a2e" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-dubai-dark antialiased`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <PageTracking />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
