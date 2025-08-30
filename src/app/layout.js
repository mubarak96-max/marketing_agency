import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import PageTracking from '@/components/analytics/Analytics';
import ExitIntentPopup from '@/components/sections/ExitIntentPopup';
import PWAInstall from '@/components/pwa/PWAInstall';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nexus Digital - Dubai\'s Premier Digital Agency | Web Development & Marketing',
  description: 'Dubai\'s leading digital agency specializing in website development, app creation, and performance marketing. 500+ successful projects, guaranteed ROI.',
  keywords: 'Dubai web development, UAE digital agency, website design Dubai, app development UAE',
  manifest: '/manifest.json',
  themeColor: '#1ba9ba',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  authors: [{ name: 'Nexus Digital' }],
  openGraph: {
    title: 'Nexus Digital - Dubai Digital Agency',
    description: 'Transform your business with Dubai\'s premier digital agency',
    images: ['/images/og-image.jpg'],
    locale: 'en_AE',
    alternateLocale: 'ar_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Digital - Dubai Digital Agency',
    description: 'Transform your business with Dubai\'s premier digital agency',
    images: ['/images/twitter-card.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
    shortcut: '/icons/icon-192x192.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Nexus Digital" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nexus Digital" />
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

        {/* Arabic Font Support */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

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

        {/* Install PWA prompt */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                // Show install button or banner
                const installBanner = document.getElementById('install-banner');
                if (installBanner) {
                  installBanner.style.display = 'block';
                }
              });
              
              function installPWA() {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                      console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                  });
                }
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
            <ExitIntentPopup />
            <PWAInstall />
            <PageTracking />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
