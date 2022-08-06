import { Layout } from './Layout.server';

const Collections = ({ collection }) => {
 
  const { title, description } = collection;

  return (
    <Layout>
      <section className='grid w-full gap-8 p-4 py-8 md:p-8 lg:p-12 justify-items-start'>
        <h1 className='text-4xl whitespace-pre-wrap font-bold inline-block'>
          {title}
        </h1>

        {description && (
          <div className='flex items-baseline justify-between w-full'>
            <div>
              <p className='max-w-md whitespace-pre-wrap inherit text-copy inline-block'>
                {description}
              </p>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Collections;
