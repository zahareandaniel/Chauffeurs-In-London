import type { RelatedLinkItem } from '@/components/editorial/RelatedLinks';

export type ClusterType = 'guides' | 'comparisons' | 'companies';

type ClusterConfig = {
  title: string;
  links: RelatedLinkItem[];
};

export const CLUSTER_LINK_MAP: Record<ClusterType, ClusterConfig> = {
  guides: {
    title: 'Cluster map: chauffeur market knowledge',
    links: [
      { href: '/guides', label: 'Guides hub' },
      { href: '/comparisons', label: 'Comparisons hub' },
      { href: '/insights', label: 'Industry insights hub' },
      { href: '/companies', label: 'Companies hub' },
    ],
  },
  comparisons: {
    title: 'Cluster map: chauffeur vs alternatives',
    links: [
      { href: '/comparisons', label: 'Comparisons hub' },
      { href: '/guides/chauffeur-service-types-london', label: 'Service model types in London' },
      { href: '/guides/chauffeur-services-london', label: 'Chauffeur services in London' },
      { href: '/insights', label: 'Industry insights hub' },
    ],
  },
  companies: {
    title: 'Cluster map: company context layer',
    links: [
      { href: '/companies', label: 'Recognised companies hub' },
      { href: '/guides/chauffeur-services-london', label: 'Core market guide' },
      { href: '/comparisons/uber-vs-chauffeur-london', label: 'Core comparison framework' },
      { href: '/insights', label: 'Industry insights hub' },
    ],
  },
};
