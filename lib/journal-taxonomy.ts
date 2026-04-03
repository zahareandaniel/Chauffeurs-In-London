/**
 * Single source for journal categories, filters, footer, topics page, and SEO copy.
 * `category` values must match Supabase `articles.category`.
 */

export type JournalTopic = {
  /** DB + filter value */
  category: string;
  /** Short editorial description for hubs / topics page */
  dek: string;
  /** Optional anchor on /guides */
  guideSectionId?: string;
};

export const JOURNAL_TOPICS: JournalTopic[] = [
  {
    category: 'Airport Transfers',
    guideSectionId: 'airport-transfers',
    dek: 'Heathrow, Gatwick, City, Stansted, Luton: timing, terminals, and what a professional transfer should include.',
  },
  {
    category: 'Corporate',
    guideSectionId: 'london-chauffeur',
    dek: 'Board travel, client collections, roadshows, and how corporate programmes should behave under pressure.',
  },
  {
    category: 'Wedding',
    guideSectionId: 'events-occasions',
    dek: 'Cars as part of the day’s choreography: briefings, patience, and presentation for fixed-time venues.',
  },
  {
    category: 'Events',
    guideSectionId: 'events-occasions',
    dek: 'Venue access, dress codes, late finishes, and multi-stop evenings where the driver is part of the programme.',
  },
  {
    category: 'Tips',
    guideSectionId: 'london-chauffeur',
    dek: 'Market context, comparisons, and practical etiquette for buyers of premium ground transport.',
  },
];

export const JOURNAL_CATEGORIES = ['All', ...JOURNAL_TOPICS.map((t) => t.category)] as const;

export type JournalCategory = (typeof JOURNAL_CATEGORIES)[number];

export function getTopicByCategory(category: string): JournalTopic | undefined {
  return JOURNAL_TOPICS.find((t) => t.category === category);
}
