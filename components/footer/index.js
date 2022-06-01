const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className='top'></div>
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><span>THE</span>LINE</h6>
            <p>모든 것의 시작인 점이 모여 선을 그리듯 더라인도 하나하나의 의견을 모아 더 나은 미래를 그려나가겠습니다.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__wrapper">
            <div className="site-footer__links">
              <ul>
                <li><a href="#">개인정보처리방침</a></li>
              </ul>
              <ul>
                <li><a href="#">이용약관</a></li>
              </ul>
              <ul>
                <li><a href="#">회사소개</a></li>
              </ul>
              <ul>
                <li><a href="#">고객센터</a></li>
              </ul>
            </div>
            <div className="site-footer__company1">
              <span className="company-des">대표: 이예담</span>
              <span className="company-des">주소:서울시 종로구 효자로 12 더라인 호텔</span>
            </div>
            <div className="site-footer__company2">
              <span className="company-des">대표: 3110-5320</span>
              <span className="company-des">사업자 등록번호: 3110-53-2037</span>
            </div>
            <div className="site-footer__company3">
              <span className="company-des">더라인 호텔: 3110-5320</span>
              <span className="company-des">더라인 카페/골프클럽: 3110-53-2037</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
      </div> */}
    </footer>
  )
};


export default Footer