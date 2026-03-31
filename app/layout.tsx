import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from './content';

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}