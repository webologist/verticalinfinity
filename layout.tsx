import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from './providers/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'] });
const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Premium Digital Consulting | Transforming Ideas Into Impact',
  description: 'Award-winning digital strategy, product engineering, and transformation services. Building scalable digital products with innovation and excellence.',
  keywords: 'digital strategy, product engineering, digital transformation, UX/UI design, AI consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg text-white`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
