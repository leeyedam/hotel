import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';

import PlaceContent from '../components/place-content';

const Places = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <PlaceContent />
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default Places;
  