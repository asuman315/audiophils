import Collections from '../../components/Collections.server';
import { Layout } from '../../components/Layout.server';

import {
  gql,
  useShopQuery,
  useRouteParams,
  Seo,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
} from '@shopify/hydrogen';
import { Suspense } from 'react';

export default function Collection() {
  const { handle } = useRouteParams();

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: { handle },
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.collection,
      resourceId: collection.id,
    },
  });

  return (
    <main className=''>
      <Layout>
        <Suspense>
          <Seo type='collection' data={collection} />
        </Suspense>
        <header className='grid'>
          <Collections collection={collection} />
        </header>
      </Layout>
    </main>
  );
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 8) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;
