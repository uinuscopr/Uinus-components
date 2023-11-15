import "../styles/global.scss";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import WrapBg from "../components/WrapBg";
import WrapInner from "../components/WrapInner";

export default function Index() {
  return (
    <>
      <main className="wrap-box">
        <WrapBg />
        <WrapInner />
      </main>
    </>
  );
}
