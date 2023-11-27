import "../styles/global.scss";
import "../styles/wrapInner.scss";
import "../styles/home.scss";
import { Link } from "react-router-dom";

import WrapBg from "../components/common/WrapBg";
import Header from "../components/common/Header";
import HeroSlide from "../components/home/HeroSlide";

export default function Home() {
  return (
    <>
      <main className="wrap-box">
        <WrapBg />
        <div className="wrap-contents">
          <Header />
          <main className="container">
            <HeroSlide />
            <section className="home-container">
              <h1>프론트엔드 컴포넌트 아카이브</h1>
              <ul>
                <li>
                  <p>1. 체크박스</p>
                </li>
                <li>
                  <p>2. 모달창</p>
                </li>
                <Link to="/collection">
                  <li>
                    <p>3. 상담문의</p>
                  </li>
                </Link>
              </ul>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}
