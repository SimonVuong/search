## Getting Started

1. Install Node v22.8.0
2. `npm install`
3. `npm run dev`
4. go to http://localhost:3000

(Algolia is running on my personal account. Please feel free to reach out if you want access to it)

## Bonus points

**How do we allow her to search for NSCLC trials -AND- immunotherapy related drugs?**

What are the results you aim to get with this query? It's possible that Algolia already supports this.

1. You can search for specific phrases using quotes. Ex: "skin cancer" "skin odor" to get results containing BOTH "skin cancer" and "skin order"
2. We can enhance the search with filters and booleon operators. See the algolia [docs](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/combining-boolean-operators/)

**How would you deploy your software?**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**What are the alternatives to loading the dataset into memory, and why would you want to use those alternatives?**

Some alternatives to memory is a relational or document db. In memory storage with Redis or server memory is great until we need more read/write complexity & flexibility
in our data storage beyond key-value. While it is persistant, Redis also isn't designed for reliable data storage so more traditional
DBs are better for reliable long-term storage. Most importantly, Redis is not support ACID transactions which is needed for data validity.

**How do we evaluate completeness of results?**

One way we can evaluate completeness of results is through the eye check. A human determines how good the results are. But as you can expect, this is not very actionable or scalable. A better way would be to measure

- Precision = (Number of relevant documents retrieved / Total number of documents retrieved) \* 100

- Recall = (Number of relevant documents retrieved / Total relevant documents) \* 100

- Clickthrough Rate = (Searches with clicks / Total number of searches) \* 100

Then, as with everything else software, the goal is to continually iterate and improve these numbers. There are additional metrics we can track, but these are the most straightforward.

## Considerations

**Why Next.JS?**

To future proof web app and allow for easy addition of SSR

**Why Pagination over infinite scroll?**

So user can bookmark and access certain results easier

**Why Algolia?**

Becauase it's a search standard and will cater to all our current and future needs such as vector searching. We can also implement our own Elasticsearch but Algolia is faster to start with

**Why instantsearch?**

Simpliest solution for our current UI Needs

## Future enhancements

1. take advantage of Next.js and make search results happen via serverside rendering for better SEO (if SEO is desired)
2. load the full dataset with all fields into Redis for fast trial lookup & display based on `nctId`
3. replace instantsearch.js with custom UI calling Algolia API queries for more complex UI needs
