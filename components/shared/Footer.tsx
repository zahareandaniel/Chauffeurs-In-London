import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import { JOURNAL_CATEGORIES } from '@/lib/guide-hubs';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-paper-warm">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-medium text-ink">{SITE.name}</p>
            <p className="editorial-label mt-3">Industry guide</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {SITE.descriptor}. Selection is editorial — we do not sell directory placement.
            </p>
          </div>

          <div>
            <p className="editorial-label mb-4">Journal</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/blog" className="hover:text-ink">
                  All articles
                </Link>
              </li>
              {JOURNAL_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="hover:text-ink"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="editorial-label mb-4">Guides</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {GUIDE_HUBS.map((hub) => (
                <li key={hub.id}>
                  <Link href={`/guides#${hub.id}`} className="hover:text-ink">
                    {hub.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/featured" className="hover:text-ink">
                  Featured operators
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="editorial-label mb-4">Platform</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/about" className="hover:text-ink">
                  Editorial standards
                </Link>
              </li>
              <li>
                <Link href="/get-featured" className="hover:text-ink">
                  Request a feature
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Contact the desk
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-ink">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-fine mt-14" />

        <div className="mt-8 space-y-4 border-t border-line pt-8">
          <p className="text-[0.7rem] leading-relaxed text-ink-subtle">
            Part of London&apos;s wider private-hire and chauffeur editorial ecosystem — platform
            first, selective operator features second.
          </p>
          <div className="flex flex-col gap-4 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {SITE.legalName}. Editorial content. Not financial or legal advice.</p>
            <p className="max-w-md leading-relaxed sm:text-right">
              <Link href="/chauffeur-services" className="underline underline-offset-2 hover:text-ink">
                Compare chauffeur companies
              </Link>{' '}
              we profile. {SITE.name} is independent; see{' '}
              <Link href="/about" className="underline underline-offset-2 hover:text-ink">
                editorial standards
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
