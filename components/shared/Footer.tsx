import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import { FOOTER_PRIMARY, FOOTER_SECONDARY } from '@/lib/site-navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-paper-deep">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <p className="font-display text-xl font-semibold tracking-tight text-ink">{SITE.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              An independent editorial platform covering the chauffeur and executive transport market
              in London.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-muted">
              {FOOTER_PRIMARY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-subtle">
              {FOOTER_SECONDARY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="divider-fine mt-12" />

        <p className="mt-8 text-xs text-ink-subtle">
          © {year} {SITE.legalName}. Editorial content only. It is not legal or operational advice.
        </p>
      </div>
    </footer>
  );
}
