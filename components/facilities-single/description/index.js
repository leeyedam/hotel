const Description = ({ show }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>더 라인의 다양한 즐길거리</h4>
        <p>더 라인 호텔에서는 골프장 / 야외 및 실내 수영장 / 레스토랑 / 카페 등 다양한 시설을 보유하고 있습니다.<br/>호텔 숙박과 별개로 시설 이용만 따로 예약 후 사용 가능합니다.</p>
      </div>
    </section>
  );
};
  
export default Description;
    