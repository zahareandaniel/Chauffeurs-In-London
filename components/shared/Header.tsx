'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE } from '@/lib/site-config';
import { PRIMARY_NAV } from '@/lib/site-navigation';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur-md">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[3.75rem] items-center justify-between">
          <Link href="/" className="group focus-ring rounded-sm shrink-0" aria-label={`${SITE.name} home`}>
            <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {SITE.name}
            </span>
            <span className="mt-0.5 block text-[0.6rem] font-body font-semibold uppercase tracking-[0.2em] text-ink-subtle">
              Editorial desk
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8" aria-label="Primary">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.8rem] font-semibold text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="xl:hidden flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-ink focus-ring"
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
          <div id="mobile-nav" className="xl:hidden border-t border-line py-4 max-h-[min(70vh,520px)] overflow-y-auto">
            <ul className="flex flex-col gap-0.5">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-paper-warm"
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
