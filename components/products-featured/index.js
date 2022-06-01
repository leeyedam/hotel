import ProductsCarousel from './carousel';
import useSwr from 'swr';
import rooms from '../../utils/data/rooms'

const ProductsFeatured = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { error } = useSwr('/api/products', fetcher);
  const data = rooms

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Rooms</h3>
          <a href="/rooms" className="btn btn--rounded btn--border">예약하기</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured