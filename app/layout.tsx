import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Learn Docker From Zero to Production`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Docker course',
    'Learn Docker',
    'Docker commands',
    'Docker roadmap',
    'Docker labs',
    'Docker for beginners',
    'Docker production',
    'containerization',
    'devops',
  ],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Learn Docker From Zero to Production`,
    description: siteConfig.description,
    url: '/',
    images: [
      {
        url: '/docker-logo.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Learn Docker Online`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Learn Docker From Zero to Production`,
    description: siteConfig.description,
    images: ['/docker-logo.png'],
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
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar-thin">
      <body className="min-h-screen flex flex-col bg-dark-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
