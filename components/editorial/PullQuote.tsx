type Props = {
  quote: string;
  attribution?: string;
};

export default function PullQuote({ quote, attribution }: Props) {
  return (
    <figure className="my-12 border-y border-line py-10 lg:-mx-4 lg:px-4 xl:-mx-8">
      <blockquote className="font-display text-2xl font-medium leading-snug text-ink md:text-[1.65rem]">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
