import "../../styles/counseling.scss";

export default function Counseling() {
  return (
    <>
      <section className="counseling-container">
        <form>
          <h4>상담문의</h4>
          {/*  1. 기업명 */}
          <div className="input-grp">
            <label className="inp-label" htmlFor="comName">
              기업명
            </label>
            <input type="text" name="comName" className="input" />
          </div>
          {/* 2. 사업자 번호 */}
          <div className="input-grp">
            <label className="inp-label" htmlFor="bizNum">
              사업자번호
            </label>
            <input type="number" name="bizNum" className="input" />
          </div>
        </form>
        <button type="submit">문의하기</button>
      </section>
    </>
  );
}
