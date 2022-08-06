import { useRouteParams } from '@shopify/hydrogen';
import { Layout } from '../../components/Layout.server';
export default function Collection() {
  const { handle } = useRouteParams();
  return (
    <Layout>
      <section className='p-6 md:p-8 lg:p-12'>
        This will be the collection page for <strong>{handle}</strong>
      </section>
    </Layout>
  );
}
