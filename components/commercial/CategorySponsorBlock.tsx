type Props = {
  /** When set, show sponsor line; otherwise restrained placeholder for guides/comparisons. */
  sponsorName?: string | null;
  tagline?: string | null;
};

/** Optional rail for category sponsorship on pillar pages. Inactive by default. */
export default function CategorySponsorBlock({ sponsorName, tagline }: Props) {
  if (sponsorName && tagline) {
    return (
      <aside className="border border-line bg-paper-warm px-5 py-4">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
          Category sponsor
        </p>
        <p className="mt-2 text-sm font-medium text-ink">{sponsorName}</p>
        <p className="mt-1 text-xs leading-relaxed text-ink-muted">{tagline}</p>
      </aside>
    );
  }

  return (
    <aside className="border border-dashed border-line/80 bg-surface px-5 py-4">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-subtle">
        Sponsor space
      </p>
      <p className="mt-2 text-xs leading-relaxed text-ink-subtle">
        Reserved for a single category line when relevant. No active sponsorship on this page.
      </p>
    </aside>
  );
}
