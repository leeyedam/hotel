const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/subscribe.jpg)'}} className="subscribe__content">
          <div className="subscibe-content-wrapper">
            <h4>THE LINE 골프클럽 모집중</h4>
            <p>기간안내: 22.05.30-22.06.20</p>
          </div>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">신청하기</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe