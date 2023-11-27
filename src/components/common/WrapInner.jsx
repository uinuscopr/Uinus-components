import "../../styles/wrapInner.scss";
import { Link } from "react-router-dom";

import Header from "./Header";
import HeroSlide from "../home/HeroSlide";

export default function WrapInner() {
  return (
    <>
      <div className="wrap-contents">
        <Header />
        <main className="container">
          <HeroSlide />
          <h1>프론트엔드 컴포넌트 아카이브</h1>
          <ul>
            <li>
              <p>1. 체크박스</p>
            </li>
            <li>
              <p>2. 모달창</p>
            </li>
            <Link to="/registUserInfo">
              <li>
                <p>3. 화원가입</p>
              </li>
            </Link>
          </ul>
        </main>
      </div>
    </>
  );
}
