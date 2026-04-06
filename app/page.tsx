import { supabase } from '@/lib/supabase';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedCompanyCard from '@/components/editorial/FeaturedCompanyCard';
import EditorsPicksSection from '@/components/editorial/EditorsPicksSection';
import CategoryRail from '@/components/editorial/CategoryRail';
import RecognisedMarketOperatorsHome from '@/components/editorial/RecognisedMarketOperatorsHome';
import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import { getFeaturedCompanies } from '@/lib/featured-companies';
import { getEditorsPicks } from '@/lib/editor-picks';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Home',
  description: `${SITE.descriptor}. Independent journal, featured chauffeur operators, and structured guides for London executive travel.`,
};

export default async function HomePage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(9);

  const companiesDisplay = [...getFeaturedCompanies()].sort((a, b) => a.name.localeCompare(b.name));
  const editorsPicks = getEditorsPicks();
  const [lead, ...rest] = articles ?? [];

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-line bg-paper">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.35]" aria-hidden />
          <div className="relative max-w-content mx-auto px-4 py-section sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
              <div className="lg:col-span-7">
                <p className="editorial-label">{SITE.descriptor}</p>
                <h1 className="font-display mt-8 text-display-2xl font-medium tracking-tight text-ink">
                  The independent desk for London chauffeurs
                </h1>
                <p className="mt-8 max-w-readable text-lg leading-relaxed text-ink-muted sm:text-xl">
                  Long-form guides on airports, corporate programmes, and occasions, written so
                  readers can decide with confidence. Operator features sit on the same template
                  and the same standards: curated, never cluttered.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/blog" className="btn-primary">
                    Read the journal
                  </Link>
                  <Link href="/chauffeur-services" className="btn-secondary">
                    Chauffeur shortlist
                  </Link>
                  <Link href="/get-featured" className="btn-secondary">
                    Apply for a feature
                  </Link>
                </div>
              </div>
              <aside className="lg:col-span-5">
                <div className="border border-line bg-surface p-8 shadow-editorial lg:translate-y-2">
                  <p className="editorial-label">At a glance</p>
                  <ul className="mt-6 space-y-5 text-sm text-ink-muted">
                    <li className="flex justify-between gap-4 border-b border-line pb-4">
                      <span>Publication model</span>
                      <span className="text-right font-medium text-ink">Editorial / selective</span>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-line pb-4">
                      <span>Operator profiles</span>
                      <span className="text-right font-medium text-ink">Same layout for all</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Commercial bias</span>
                      <span className="text-right font-medium text-ink">No paid placement</span>
                    </li>
                  </ul>
                  <blockquote className="mt-8 border-l-2 border-ink pl-4 font-display text-lg font-medium leading-snug text-ink">
                    “Serious transport deserves serious prose, and operators deserve a platform that
                    doesn’t look like a coupon site.”
                  </blockquote>
                  <p className="mt-3 text-xs text-ink-subtle">Editorial charter · {SITE.name}</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CategoryRail />

        <RecognisedMarketOperatorsHome />

        <section className="border-b border-line bg-paper-warm px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="editorial-label">Positioning</p>
              <h2 className="font-display mt-4 text-display-lg font-medium text-ink">
                Why this platform exists
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base leading-[1.8] text-ink-muted">
              <p>
                Executive ground transport is a high-stakes category buried under low-quality
                pages: keyword-stuffed blogs, indistinguishable directories, and “luxury” clichés
                that tell you nothing about how a desk actually behaves when a flight is late.
              </p>
              <p>
                We publish {SITE.name} as a counterweight: slow, explicit, and visually quiet,
                closer to a travel quarterly than a lead-gen microsite. Featured companies receive
                the same typography and methodology notes as everyone else; selectivity is the
                signal, not neon buttons.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/about" className="link-underline text-sm font-semibold">
                  Editorial standards →
                </Link>
                <Link href="/methodology" className="link-underline text-sm font-semibold">
                  Selection methodology →
                </Link>
                <Link href="/guides" className="link-underline text-sm font-semibold">
                  Guides index →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <EditorsPicksSection picks={editorsPicks} />
          </div>
        </section>

        <section className="border-t border-line bg-surface px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="editorial-label">Profiles</p>
                <h2 className="font-display mt-3 text-display-lg font-medium text-ink">
                  Featured operators
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                  Full editorial profiles: overview, airports, specialisms, and methodology. Identical
                  structure for every operator we profile. Trouv Chauffeurs carries an official-site link;
                  the rest stay without outbound links so the frame stays honest.
                </p>
              </div>
              <Link href="/featured" className="btn-secondary shrink-0 self-start sm:self-auto">
                Directory →
              </Link>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {companiesDisplay.map((c) => (
                <FeaturedCompanyCard key={c.slug} company={c} />
              ))}
            </div>
          </div>
        </section>

        {lead && (
          <section className="border-t border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <p className="editorial-label">Latest</p>
                  <h2 className="font-display mt-3 text-display-lg font-medium text-ink">The journal</h2>
                  <p className="mt-3 max-w-lg text-sm text-ink-muted">
                    New and recent guides, each edited for structure, internal linking, and clarity.
                  </p>
                </div>
                <Link href="/blog" className="link-underline text-sm font-semibold">
                  Full archive →
                </Link>
              </div>
              <div className="mt-14 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <BlogCard article={lead} featured />
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                  {rest.slice(0, 2).map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
              {rest.length > 2 && (
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.slice(2, 5).map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="border-t border-line px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="editorial-label">Navigation</p>
            <h2 className="font-display mt-3 text-display-lg font-medium text-ink">Guide hubs</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Topic clusters that tie articles together for readers and crawlers: always
              editorial-first, never doorway pages.
            </p>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {GUIDE_HUBS.map((hub) => (
                <div
                  key={hub.id}
                  id={hub.id}
                  className="scroll-mt-28 border border-line bg-surface p-8 lg:p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                >
                  <h3 className="font-display text-xl font-medium text-ink">{hub.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{hub.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {hub.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="link-underline text-sm font-medium">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link href="/guides" className="btn-secondary">
                Complete guides index
              </Link>
              <Link href="/topics" className="btn-secondary">
                Topic overview
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-ink text-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto text-center">
            <p className="editorial-label text-paper/45">Partnership</p>
            <h2 className="font-display mx-auto mt-6 max-w-xl text-display-lg font-medium text-paper">
              Inclusion is visible: never silent, never desperate
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-paper/65">
              We built the visual system so a feature feels like a magazine profile: restrained type,
              generous space, and copy you can send to a board without embarrassment. If that bar
              matches your brand, the desk accepts applications. Not everyone is listed, and the
              page explains why.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/get-featured"
                className="inline-flex border border-paper bg-paper px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-paper/90"
              >
                Begin an application
              </Link>
              <Link
                href="/contact"
                className="inline-flex border border-white/30 bg-transparent px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-white/10"
              >
                Contact editorial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
