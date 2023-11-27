import "../../styles/header.scss";
import { Link } from "react-router-dom";
import menu from "../../assets/images/common/menu_ham.svg";
import logo from "../../assets/images/common/logo.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="top-menu">
          <img className="menu-icon" src={menu} alt="메뉴" />
        </div>
        <div className="top-logo">
          <h1 className="logo">
            유비츠 컴포넌트
            <Link to="/">
              <img className="logo-img" src={logo} alt="로고" />
            </Link>
          </h1>
        </div>
      </header>
    </>
  );
}
