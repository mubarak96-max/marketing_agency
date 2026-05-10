import { Inter } from 'next/font/google';
import './globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import PageTracking from '@/components/analytics/Analytics';
import { organizationSchema, siteConfig } from '@/data/site';
import Script from 'next/script';

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
  },
  verification: {
    google: 'eSV98B-4QtLo4VKTAsZCnA2xbfiIg4rBQI-12_DSmkA',
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
      <body className={`${inter.className} min-h-screen bg-white text-brand-dark antialiased`}>
        {/* Schema.org Organization Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Service Worker Registration */}
        <Script
          id="register-sw"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(r) { console.log('SW registered:', r); })
                    .catch(function(e) { console.log('SW failed:', e); });
                });
              }
            `,
          }}
        />

        <LanguageProvider>
          <SiteShell>
            {children}
          </SiteShell>
          <PageTracking />
        </LanguageProvider>
      </body>
    </html>
  );
}
