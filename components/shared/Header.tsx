'use client';

import Link from 'next/link';
import { useState } from 'react';

const CATEGORIES = ['Airport Transfers', 'Corporate', 'Wedding', 'Events', 'Tips'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-white tracking-wide">
              Chauffeurs in London
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white/80 hover:text-white text-sm font-body font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white text-sm font-body font-medium transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://trouv.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs ml-2"
            >
              Book Trouv →
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 space-y-2">
            <Link href="/" className="block text-white/80 hover:text-white px-2 py-2 text-sm font-body">
              Home
            </Link>
            <Link href="/blog" className="block text-white/80 hover:text-white px-2 py-2 text-sm font-body">
              Blog
            </Link>
            <a
              href="https://trouv.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-gold text-center mt-3"
            >
              Book Trouv →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
