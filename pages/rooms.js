import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import RoomContent from '../components/room-content';

const rooms = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <RoomContent />
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default rooms
  