import RelatedLinks from '@/components/editorial/RelatedLinks';
import { CLUSTER_LINK_MAP, type ClusterType } from '@/lib/internal-link-map';

type Props = {
  type: ClusterType;
};

export default function ClusterLinks({ type }: Props) {
  const cluster = CLUSTER_LINK_MAP[type];
  return <RelatedLinks title={cluster.title} links={cluster.links} />;
}
