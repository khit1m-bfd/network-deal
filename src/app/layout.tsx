import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Loader from '@/components/layout/Loader';
import ProgressBar from '@/components/layout/ProgressBar';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Network Deal — Agence Digitale Premium | Web, SEO, 3D & Marketing',
    template: '%s | Network Deal',
  },
  description:
    'Network Deal est une agence digitale créative basée à Tanger, spécialisée dans la création de sites web premium, le marketing digital, le branding, le SEO et la visualisation 3D architecturale.',
  keywords: [
    'agence digitale Tanger', 'création site web Maroc', 'marketing digital Maroc',
    'visualisation 3D architecture', 'SEO Maroc', 'design UI UX', 'branding Maroc',
    'Network Deal', 'agence web Tanger',
  ],
  authors: [{ name: 'Network Deal', url: 'https://networkdeal.ma' }],
  creator: 'Network Deal',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://networkdeal.ma',
    siteName: 'Network Deal',
    title: 'Network Deal — Agence Digitale Premium',
    description: 'Nous créons des expériences digitales exceptionnelles. Sites web, SEO, marketing digital, branding et visualisation 3D.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Network Deal Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Network Deal — Agence Digitale Premium',
    description: 'Sites web ultra-modernes, SEO, marketing digital et visualisation 3D à Tanger, Maroc.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://networkdeal.ma'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Network Deal',
              description: 'Agence digitale créative spécialisée en développement web, SEO, marketing digital et visualisation 3D.',
              url: 'https://networkdeal.ma',
              telephone: '+212665158540',
              email: 'networkdealltd21@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tanger',
                addressCountry: 'MA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 35.7595,
                longitude: -5.8340,
              },
              openingHours: 'Mo-Su 00:00-23:59',
              priceRange: '€€',
              sameAs: ['https://www.facebook.com/networkdeal'],
              serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 35.7595, longitude: -5.8340 }, geoRadius: '500000' },
            }),
          }}
        />
      </head>
      <body style={{ background: '#030712' }}>
        <Loader />
        <ProgressBar />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
