import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from './content';

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: ['web design', 'web development', 'Estonia', 'responsive websites', 'business websites', 'Next.js', 'React'],
  authors: [{ name: 'WebAgency' }],
  creator: 'WebAgency',
  publisher: 'WebAgency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    siteName: siteContent.seo.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
