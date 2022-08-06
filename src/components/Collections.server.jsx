import { Layout } from './Layout.server';
import ProductCard from './ProductCard.server';

const Collections = ({ collection }) => {
 
  const { title, description, products } = collection;

  return (
      <section className='grid w-full gap-8 p-4 py-8 md:p-8 lg:p-12 justify-items-start max-w-6xl mx-auto'>
        <h1 className='text-4xl md:text-6xl whitespace-pre-wrap font-bold inline-block'>
          {title}
        </h1>

        {description && (
          <div className='flex items-baseline justify-between w-full'>
            <div>
              <p className='max-w-md text-xl whitespace-pre-wrap inherit text-copy inline-block'>
                {description}
              </p>
            </div>
          </div>
        )}

        <section className=''>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
            {products.nodes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </section>
  );
};

export default Collections;
