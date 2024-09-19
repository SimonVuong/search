'use client';

import { useDebouncedCallback } from 'use-debounce';

import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox, Configure, useInstantSearch, Pagination } from 'react-instantsearch';
import { simple } from 'instantsearch.js/es/lib/stateMappings';
import SearchHit from '@/app/ui/searchHit';
import { ReactNode } from 'react';
import '@/app/ui/search.css';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_SEARCH_KEY as string
);

const routing = {
  stateMapping: simple(),
};

const EmptyQueryBoundary = ({ children, fallback }: { children: ReactNode; fallback: ReactNode }) => {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
};

export default function Search() {
  const handleSearch = useDebouncedCallback((query: string, search: (_term: string) => void) => {
    search(query);
  }, 300);

  return (
    <InstantSearch searchClient={searchClient} indexName="trials" routing={routing}>
      <Configure hitsPerPage={10} />
      <SearchBox placeholder="Search trials" queryHook={handleSearch} />
      <EmptyQueryBoundary fallback={null}>
        <Hits hitComponent={SearchHit} />
        <Pagination />
      </EmptyQueryBoundary>
    </InstantSearch>
  );
}
