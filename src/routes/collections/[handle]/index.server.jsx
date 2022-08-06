import Collections from '../../../components/Collections.server';
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
    <main>
      <Suspense>
        <Seo type='collection' data={collection} />
      </Suspense>
      <header>
        <Collections collection={collection} />
      </header>
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
    }
  }
`;
