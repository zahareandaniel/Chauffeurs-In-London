'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE } from '@/lib/site-config';

const NAV = [
  { href: '/blog', label: 'Journal' },
  { href: '/chauffeur-services', label: 'Chauffeur services' },
  { href: '/featured', label: 'Featured operators' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'Editorial standards' },
  { href: '/get-featured', label: 'Request a feature' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link
            href="/"
            className="group focus-ring rounded-sm"
            aria-label={`${SITE.name} home`}
          >
            <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
              {SITE.name}
            </span>
            <span className="mt-0.5 block text-[0.6rem] font-body font-medium uppercase tracking-[0.18em] text-ink-subtle sm:text-[0.65rem]">
              Editorial
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded border border-line text-ink focus-ring"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="lg:hidden border-t border-line py-4">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded px-2 py-3 text-sm font-medium text-ink hover:bg-paper-warm"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
