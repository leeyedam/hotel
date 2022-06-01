import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>더 라인과 함께 떠나는<br/> 여름휴가</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>서울지점 바로가기</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>국내에서 해외여행<br/> 즐기기</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>강릉 지점</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-3.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>패키지 여행으로<br/> 두배 더 즐기기</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>제주 지점</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>서울지점</h4>
                <p>조식뷔페 10% 할인중</p>
              </div>
            </li>
            
            <li>
              <i className="icon-heart"></i>
              <div className="data-item__content">
                <h4>강릉지점</h4>
                <p>스파 오픈</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>제주지점</h4>
                <p>패키지 여행 할인중</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro