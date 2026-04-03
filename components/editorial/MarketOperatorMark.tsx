/** Typographic stand-in; no third-party logos (trademark). */
export function MarketOperatorMark({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-paper-warm font-display text-sm font-semibold tracking-tight text-ink"
      aria-hidden
    >
      {initials}
    </div>
  );
}
