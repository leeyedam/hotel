const Description = ({ show }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>도심 속 THE LINE의 매력</h4>
        <p>바쁜 현대사회 속 고즈넉한 분위기를 연출하는 도심 속 더라인<br/>
      하늘 대신 고귀한 건축미를 볼 수 있고, 도시의 소음 대신 고요하고 조용한 소리를 들을 수 있습니다.<br/>
      그럼에도 불구하고 모든 계절을 느낄 수 있는 프라이빗한 공간의 호텔입니다.
      아름답고 낯선 건축물을 바라보며 과거와 미래를 넘나드는 시간 여행자가 되시길 바랍니다.</p>
      </div>
    </section>
  );
};
  
export default Description;
    