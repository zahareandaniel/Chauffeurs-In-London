import Link from 'next/link';

export type RelatedLinkItem = { href: string; label: string; description?: string };

type Props = {
  title?: string;
  links: RelatedLinkItem[];
};

export default function RelatedLinks({ title = 'Continue reading', links }: Props) {
  return (
    <nav className="mt-16 border-t border-line pt-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="editorial-label">
        {title}
      </h2>
      <ul className="mt-6 space-y-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group block">
              <span className="font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-accent">
                {l.label}
              </span>
              {l.description && (
                <span className="mt-1 block text-sm text-ink-muted">{l.description}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
