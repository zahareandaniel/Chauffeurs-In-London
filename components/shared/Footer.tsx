import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/70 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-white text-xl font-semibold mb-3">
              Chauffeurs in London
            </p>
            <p className="text-sm leading-relaxed">
              Your trusted guide to premium chauffeur services, airport transfers,
              corporate travel and private hire across London.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-white text-lg mb-4">Topics</h3>
            <ul className="space-y-2 text-sm">
              {['Airport Transfers', 'Corporate', 'Wedding', 'Events', 'Tips'].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="hover:text-gold transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trouv CTA */}
          <div>
            <h3 className="font-display text-white text-lg mb-4">Book a Chauffeur</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Looking for a premium chauffeur in London? We recommend Trouv — the city's
              leading private hire service.
            </p>
            <a
              href="https://trouv.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block text-xs"
            >
              Visit Trouv →
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs flex flex-col sm:flex-row justify-between gap-2">
          <p>© {year} Chauffeurs in London. All rights reserved.</p>
          <p>
            Premium chauffeur services powered by{' '}
            <a
              href="https://trouv.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Trouv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
