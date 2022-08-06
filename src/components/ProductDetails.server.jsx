import { Layout } from './Layout.server';

const ProductDetails = ({ handle }) => {
  return (
      <Layout>
        <section className='p-6 md:p-8 lg:p-12'>
          <h1>
            This will be the product page for {handle}
          </h1>
        </section>
      </Layout>
  );
};

export default ProductDetails;
