/* eslint no-console: 0 */
import { readFileSync } from 'fs';
import { algoliasearch } from 'algoliasearch';

// Connect and authenticate with your Algolia app
const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY, {
  timeouts: {
    connect: 50000,
    write: 50000,
  },
});

// Fetch and index objects in Algolia
const processRecords = () => {
  // ctg-studies-search.json contains only data relevant to searching & display
  // use ctg-studies-search.json instead of full data to increase search speed
  const data = readFileSync('scripts/ctg-studies-search.json');
  const objects = JSON.parse(data);
  return client.saveObjects({ indexName: 'trials', objects });
};

processRecords()
  .then(() => console.log('Successfully indexed objects!'))
  .catch((err) => console.error(err));
