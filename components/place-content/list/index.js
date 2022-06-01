import useSwr from 'swr';
import ProductItem from './../../place-item';
import ProductsLoading from './loading';
import places from '../../../utils/data/places'

const PlaceContent = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { error } = useSwr('/api/products', fetcher);
  const data = places

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map(item => (
            <ProductItem 
              discount={item.discount} 
              key={item.id}
              id={item.id} 
              price={item.price}
              currentPrice={item.currentPrice}
              productImage={item.images[0]} 
              name={item.name}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default PlaceContent;