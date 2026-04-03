import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import GetFeaturedForm from '@/components/forms/GetFeaturedForm';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Request editorial consideration',
  description:
    'Apply for editorial consideration on Chauffeurs in London. Selective operator profiles, no pay-to-list, no pricing on page.',
};

const STEPS = [
  {
    title: 'Application',
    body: 'You submit company facts, coverage map, and how you want executive buyers to understand your desk.',
  },
  {
    title: 'Desk review',
    body: 'We read public materials only first: site, T&amp;Cs, stated fleet, and how you describe crisis handling.',
  },
  {
    title: 'Decision',
    body: 'If there is a fit, we may request a short call. Declines are private; we do not comment on why a name is absent.',
  },
];

const CRITERIA = [
  'Licensed framing that matches how you actually operate',
  'Consistency between marketing language and booking reality',
  'Clear airport or corporate positioning we can describe in plain English',
  'Willingness to work with fact-checked editorial copy',
  'No requirement for exclusive editorial rights',
];

const BENEFITS = [
  {
    title: 'Visibility',
    body: 'A long-form profile sits alongside serious guides, not buried in an undifferentiated grid. Readers arrive from journal pieces and hub pages, not from generic search landings alone.',
  },
  {
    title: 'Positioning',
    body: 'Your offer is explained in the same typographic system as the rest of the desk: methodology notes, limitations, and structure that signal you understand executive buyers.',
  },
  {
    title: 'Editorial exposure',
    body: 'When a guide needs a concrete example, featured operators can be named in context. That is editorial discretion, not a guaranteed mention on every URL.',
  },
];

export default function GetFeaturedPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-paper hero-grid">
          <div className="max-w-content mx-auto px-4 py-section sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="editorial-label">Operator programme</p>
                <h1 className="font-display mt-8 text-display-xl font-medium text-ink">
                  Request to be featured on {SITE.name}
                </h1>
                <p className="mt-8 max-w-readable text-lg leading-relaxed text-ink-muted">
                  This is not a directory checkout. Features are selective, edited, and published so a
                  demanding reader can trust what they see. We show sample entries beside live partners
                  so the frame stays honest: the same margins, badges, and methodology notes for
                  everyone on the grid.
                </p>
                <p className="mt-6 max-w-readable text-sm leading-relaxed text-ink-muted">
                  There is no pricing here and no “buy a listing” path. If the fit is wrong, we simply
                  do not proceed.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-line bg-surface p-8 shadow-editorial">
                  <p className="editorial-label">Before you write</p>
                  <ul className="mt-6 space-y-4 text-sm text-ink-muted">
                    {CRITERIA.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="editorial-label">Why operators ask</p>
            <h2 className="font-display mt-4 text-display-lg font-medium text-ink">
              What a feature can offer
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
              Stated plainly, without sales language: inclusion means showing up where buyers already
              read serious transport guidance.
            </p>
            <ul className="mt-14 grid gap-10 md:grid-cols-3">
              {BENEFITS.map((b) => (
                <li key={b.title} className="border-t-2 border-ink/15 pt-8">
                  <h3 className="font-display text-lg font-medium text-ink">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{b.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="editorial-label">Process</p>
            <h2 className="font-display mt-4 text-display-lg font-medium text-ink">
              How consideration works
            </h2>
            <ol className="mt-14 grid gap-8 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t-2 border-ink/15 pt-8">
                  <span className="font-display text-3xl font-medium text-ink/20 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="editorial-label">Form</p>
              <h2 className="font-display mt-4 text-2xl font-medium text-ink">Submit your desk</h2>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                The fields mirror what we need to triage quickly. If your story is credible, we will
                read it carefully; if volume is high, silence may simply mean timing.
              </p>
              <p className="mt-6 text-sm text-ink-muted">
                Read{' '}
                <Link href="/methodology" className="font-semibold text-ink underline underline-offset-2">
                  how companies are selected
                </Link>{' '}
                and{' '}
                <Link href="/about" className="font-semibold text-ink underline underline-offset-2">
                  editorial standards
                </Link>{' '}
                before you apply.
              </p>
              <div className="mt-10 border border-line bg-paper-warm p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  Commercial note
                </p>
                <p className="mt-3 text-sm text-ink-muted">
                  Profiles are not sold. We may reference operators elsewhere on the site when guides
                  need a concrete example, always with the same disclosure language.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <GetFeaturedForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
