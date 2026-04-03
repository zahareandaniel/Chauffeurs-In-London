import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import { JOURNAL_TOPICS } from '@/lib/journal-taxonomy';
import { PLATFORM_LINKS } from '@/lib/site-navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-paper-deep">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold tracking-tight text-ink">{SITE.name}</p>
            <p className="editorial-label mt-4">Industry publication</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {SITE.descriptor}. We do not sell directory placement. Topics, hubs, and profiles are
              edited to the same standard.
            </p>
          </div>

          <div>
            <p className="editorial-label mb-4">Topics</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {JOURNAL_TOPICS.map((t) => (
                <li key={t.category}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(t.category)}`}
                    className="transition-colors hover:text-ink"
                  >
                    {t.category}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/topics" className="font-medium text-ink hover:underline">
                  All topics →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="editorial-label mb-4">Guides</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {GUIDE_HUBS.map((hub) => (
                <li key={hub.id}>
                  <Link href={`/guides#${hub.id}`} className="transition-colors hover:text-ink">
                    {hub.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/chauffeur-services" className="transition-colors hover:text-ink">
                  Chauffeur shortlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="editorial-label mb-4">Platform</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {PLATFORM_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-fine mt-14" />

        <div className="mt-8 space-y-4">
          <p className="text-[0.7rem] leading-relaxed text-ink-subtle max-w-3xl">
            Part of London&apos;s wider private-hire editorial ecosystem — platform voice first,
            operator credits second. No page on this site should read like a single-brand brochure.
          </p>
          <div className="flex flex-col gap-3 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {SITE.legalName}. Editorial content only; not legal or financial advice.</p>
            <p className="sm:text-right">
              <Link href="/chauffeur-services" className="underline underline-offset-2 hover:text-ink">
                Compare featured operators
              </Link>
              {' · '}
              <Link href="/about" className="underline underline-offset-2 hover:text-ink">
                Selection methodology
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
