import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eeiae.com'),
  title: 'Elite Engineering Inspections | Professional Property Inspection UAE',
  description: 'Certified InterNACHI CPI® engineers delivering unbiased, 12-hour inspection reports for apartments, villas, and townhouses across the UAE. Independent property snagging inspections.',
  keywords: ['property inspection UAE', 'Dubai property inspection', 'villa inspection', 'apartment inspection', 'snagging inspection', 'certified property inspector', 'InterNACHI', 'Abu Dhabi inspection', 'property snagging UAE'],
  authors: [{ name: 'Elite Engineering Inspections' }],
  creator: 'Elite Engineering Inspections',
  publisher: 'Elite Engineering Inspections',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://eeiae.com',
    title: 'Elite Engineering Inspections | Professional Property Inspection UAE',
    description: 'Certified InterNACHI CPI® engineers delivering unbiased, 12-hour inspection reports for apartments, villas, and townhouses across the UAE.',
    siteName: 'Elite Engineering Inspections',
    images: [
      {
        url: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg',
        width: 1200,
        height: 630,
        alt: 'Elite Engineering Inspections - Dubai Property Inspection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Engineering Inspections | Professional Property Inspection UAE',
    description: 'Certified InterNACHI CPI® engineers delivering unbiased, 12-hour inspection reports across the UAE.',
    images: ['https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
