import Link from 'next/link';

type Props = {
  /** When true, render a named partner block instead of the placeholder. */
  active?: boolean;
  partnerName?: string;
  description?: string;
  href?: string;
};

/**
 * Homepage module: placeholder until a partner placement is sold.
 * When active, must stay clearly labelled as commercial.
 */
export default function FeaturedPartnerStrip({
  active = false,
  partnerName,
  description,
  href,
}: Props) {
  if (active && partnerName && description && href) {
    return (
      <section className="border-y border-line bg-paper-warm px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
              Featured partner placement
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-ink">{partnerName}</p>
            <p className="mt-1 max-w-xl text-sm text-ink-muted">{description}</p>
          </div>
          <Link href={href} className="btn-secondary shrink-0 self-start sm:self-center text-[0.65rem]">
            Learn more
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-line bg-surface px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-muted">
          Partner opportunities available. This space is reserved for a single, clearly labelled
          placement when sold.
        </p>
        <Link href="/advertise" className="link-underline text-sm font-medium text-ink">
          Learn more
        </Link>
      </div>
    </section>
  );
}
