import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>다양한 요리를 즐겨보세요!</h3>
              <a href="#" className="btn btn--rounded">지금 예약하기</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>수영장 OPEN</h3>
              <a href="#" className="btn btn--rounded">지금 예약하기</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>골프클럽</h3>
              <a href="#" className="btn btn--rounded">지금 예약하기</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>다양한 시설 보유</h4>
          </header>
          <p className="section__detail">THE LINE은 골프시설 / 수영장 / 산책로 / 레스토랑 / 테니스장 등 다양한 시설을
            보유하고 있습니다.<br/> 다양한 볼거리와 즐길거리가 있으니 오셔서 여러 경험을 하고 가실 수 있습니다.
          </p>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage