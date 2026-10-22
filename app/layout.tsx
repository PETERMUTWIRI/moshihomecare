import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import CookieConsent from '@/components/CookieConsent';

// ==========================================
// MOSHI HOMECARE - PROFESSIONAL HOMECARE
// Root Layout with SEO Optimization
// ==========================================

// Clean, professional font for healthcare
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ==========================================
// SEO METADATA - OPTIMIZED FOR SEARCH
// ==========================================

export const metadata: Metadata = {
  // Core title template
  title: {
    default: "Moshi Home Care",
    template: "%s | Moshi Home Care",
  },
  
  // Primary description
  description: "Compassionate care, right at home. Professional home care services you can trust, serving families across all counties in North Carolina. Caregivers for seniors and individuals needing assistance at home.",
  
  // Keywords for search engines
  keywords: [
    'home care services',
    'senior care',
    'in-home care',
    'caregiver services',
    'elderly care',
    'home health aide',
    'personal care assistant',
    'respite care',
    'companionship services',
    'medication reminders',
    'daily living assistance',
    'North Carolina home care',
    'professional caregivers',
    'licensed home care',
    'Moshi Home Care',
  ],
  
  // Authors and ownership
  authors: [{ name: "Moshi Home Care" }],
  creator: "Moshi Home Care",
  publisher: "Moshi Home Care",
  
  // Format detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // Canonical URL base
  metadataBase: new URL('https://www.moshihomecare.com'),
  
  // Alternates
  alternates: {
    canonical: '/',
  },
  
  // Icons - Using Moshi Home Care logo as favicon
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Open Graph - Social sharing
  openGraph: {
    title: "Moshi Home Care",
    description: "Trusted home care services for your loved ones. 5+ years of experience serving families across all counties in North Carolina.",
    url: 'https://www.moshihomecare.com',
    siteName: "Moshi Home Care",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moshi Home Care - Professional Home Care Services',
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: "Moshi Home Care",
    description: "Trusted home care services for your loved ones. Serving all counties in North Carolina with compassion and professionalism.",
    images: ['/images/og-image.jpg'],
    creator: '@MoshiHomecare',
    site: '@MoshiHomecare',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  
  // Category
  category: 'healthcare',
};

// ==========================================
// VIEWPORT CONFIGURATION
// ==========================================

export const viewport = {
  themeColor: '#1E8996',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Moshi Home Care',
              description: 'Professional home care services serving families across all counties in North Carolina. 5+ years of experience providing compassionate care for seniors and individuals needing assistance.',
              url: 'https://www.moshihomecare.com',
              telephone: '+1 (910) 476-6003',
              email: 'info@moshihomecare.com',
              image: 'https://www.moshihomecare.com/moshi_logo_card.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '145 Brisk Drive',
                addressLocality: 'Zebulon',
                addressRegion: 'NC',
                postalCode: '27597',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 35.8243,
                longitude: -78.3147,
              },
              areaServed: {
                '@type': 'State',
                name: 'North Carolina',
              },
              serviceType: [
                'Home Care Services',
                'Senior Care',
                'Personal Care',
                'Companionship',
                'Medication Reminders',
              ],
              priceRange: '$$',
              openingHours: '24/7',
              sameAs: [
                'https://facebook.com/moshihomecare',
                'https://instagram.com/moshihomecare',
                'https://linkedin.com/company/moshihomecare',
              ],
            }),
          }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Home Care Services',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Moshi Home Care',
              },
              areaServed: {
                '@type': 'State',
                name: 'North Carolina',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Home Care Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Home Care Services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Medication Reminder',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Daily Living Assistance',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Companionship',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      
      <body 
        className={`${inter.className} antialiased bg-white text-care-navy`}
      >
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main className="relative">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
        
        {/* Back to top button */}
        <BackToTop />
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
