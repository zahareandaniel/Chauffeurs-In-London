export default function TrouvCTA() {
  return (
    <div className="my-10 border border-gold/30 bg-gold/5 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="text-3xl">🚗</div>
        <div className="flex-1">
          <h3 className="font-display text-navy text-xl font-semibold mb-1">
            Need a chauffeur in London?
          </h3>
          <p className="text-navy/70 text-sm leading-relaxed">
            Trouv offers premium chauffeur services across London — airport transfers,
            corporate travel, weddings and events. Discreet, punctual and professionally
            presented drivers in executive vehicles.
          </p>
        </div>
        <a
          href="https://trouv.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold whitespace-nowrap self-start sm:self-auto"
        >
          Book with Trouv →
        </a>
      </div>
    </div>
  );
}
