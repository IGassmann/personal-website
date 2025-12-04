import { type Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { Footer } from '@/app/Footer';
import { Header } from '@/app/Header';
import { Providers } from '@/app/providers';

import '@/styles/tailwind.css';

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error('NEXT_PUBLIC_SITE_URL is not defined');
}

export const metadata: Metadata = {
  title: {
    template: '%s - Igor Gassmann',
    default: 'Igor Gassmann - Product Engineer who cares about the details',
  },
  description:
    'I’m Igor, a Product Engineer based in Switzerland. I’ve been shipping products at startups for the past 6 years.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  alternates: {
    types: {
      'application/feed+json': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.json`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Header />
              <main className="flex-auto">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
