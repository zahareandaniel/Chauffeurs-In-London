type Variant = 'sponsored' | 'featured-partner' | 'collaboration';

type Props = {
  variant: Variant;
  partnerName?: string;
  className?: string;
};

const copy: Record<Variant, (partner?: string) => string> = {
  sponsored: () => 'Sponsored',
  'featured-partner': () => 'Featured partner',
  collaboration: (p) => (p ? `In collaboration with ${p}` : 'In collaboration with'),
};

/** Small, honest disclosure for future commercial content. Not a primary visual element. */
export default function SponsoredLabel({ variant, partnerName, className = '' }: Props) {
  return (
    <span
      className={`inline-block border border-line bg-paper-warm px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-subtle ${className}`}
    >
      {copy[variant](partnerName)}
    </span>
  );
}
