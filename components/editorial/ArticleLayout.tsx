import type { ReactNode } from 'react';

type Props = {
  kicker?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  /** Related links or other end-of-article modules */
  endmatter?: ReactNode;
};

/**
 * Pillar article shell: narrow editorial measure, no decorative excess.
 */
export default function ArticleLayout({ kicker, title, intro, children, endmatter }: Props) {
  return (
    <article className="max-w-editorial mx-auto">
      {kicker && (
        <p className="editorial-label" role="doc-subtitle">
          {kicker}
        </p>
      )}
      <h1 className="font-display mt-6 text-display-lg font-semibold text-ink">{title}</h1>
      {intro && <div className="mt-8 text-lg leading-relaxed text-ink-muted">{intro}</div>}
      <div className="mt-12 space-y-10 text-base leading-[1.85] text-ink-muted">{children}</div>
      {endmatter}
    </article>
  );
}
