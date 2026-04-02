import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Chauffeurs in London — Premium Chauffeur Guides & Advice',
    template: '%s | Chauffeurs in London',
  },
  description:
    'Expert guides on chauffeur services, airport transfers, corporate travel and private hire in London.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://chauffeursinlondon.com'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
