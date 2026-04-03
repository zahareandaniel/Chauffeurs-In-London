import type { Metadata } from 'next';
import './globals.css';
import { SITE, siteUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · Editorial guide to London chauffeurs`,
    template: `%s · ${SITE.name}`,
  },
  description:
    'Curated guides and operator features on executive travel, airport transfers, and chauffeur services in London. Editorial standards, no pay-to-list directory.',
  metadataBase: new URL(siteUrl()),
  robots: { index: true, follow: true },
};

function organizationJsonLd() {
  const base = siteUrl().replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${base}/#organization`,
        name: SITE.legalName,
        description: SITE.descriptor,
        url: base,
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        name: SITE.name,
        url: base,
        description:
          'Curated guides and operator features on executive travel, airport transfers, and chauffeur services in London.',
        publisher: { '@id': `${base}/#organization` },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
