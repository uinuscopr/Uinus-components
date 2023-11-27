import "../styles/global.scss";
import "../styles/wrapInner.scss";

import WrapBg from "../components/common/WrapBg";
import Header from "../components/common/Header";
import Counseling from "../components/collection/Counseling";

export default function Collection({ title }) {
  return (
    <>
      <main className="wrap-box">
        <WrapBg />
        <div className="wrap-contents">
          <Header />
          <main className="container">
            {/* 상담문의 */}
            <Counseling />
          </main>
        </div>
      </main>
    </>
  );
}
