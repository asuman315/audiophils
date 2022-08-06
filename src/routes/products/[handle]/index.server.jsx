import { useRouteParams } from '@shopify/hydrogen';
import ProductDetails from '../../../components/ProductDetails.server';

export default function Product() {
  const { handle } = useRouteParams();

  return (
    <main>
     <ProductDetails handle={handle} />
    </main>
  );
}
