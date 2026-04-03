import Link from 'next/link';
import type { FeaturedCompany } from '@/lib/featured-companies';

export default function FeaturedCompanyCard({ company }: { company: FeaturedCompany }) {
  const isSample = company.badges.some((b) => b.toLowerCase().includes('sample'));

  return (
    <article className="card-editorial relative flex flex-col overflow-hidden border border-line bg-surface p-8 lg:p-10">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-ink/20 to-transparent"
        aria-hidden
      />
      <div className="flex flex-wrap gap-2">
        {company.badges.map((b) => (
          <span key={b} className="badge-muted">
            {b}
          </span>
        ))}
      </div>
      <h2 className="font-display mt-6 text-2xl font-medium tracking-tight text-ink">
        <Link href={`/featured/${company.slug}`} className="hover:opacity-70">
          {company.name}
        </Link>
      </h2>
      <p className="mt-1 text-sm text-ink-subtle">{company.location}</p>
      <p className="mt-4 text-sm font-medium leading-snug text-ink-muted">{company.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{company.editorialSummary}</p>
      <p className="mt-6 border-t border-line pt-6 text-xs text-ink-subtle">
        {company.serviceFocus.join(' · ')}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/featured/${company.slug}`} className="btn-secondary text-[0.65rem]">
          Read profile
        </Link>
        {company.websiteUrl && !isSample && (
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[0.65rem]"
          >
            Website
          </a>
        )}
      </div>
    </article>
  );
}
