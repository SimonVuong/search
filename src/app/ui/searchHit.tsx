import { Highlight } from 'react-instantsearch';
import type { BaseHit, Hit } from 'instantsearch.js';

export default function SearchHit({ hit }: { hit: Hit<BaseHit> }) {
  return <Highlight attribute="protocolSection.identificationModule.officialTitle" hit={hit} />;
}
