import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftNavBar from "./LeftNavBar";
import Footer from "./Footer";
import "./layout.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout-body">
        <LeftNavBar />
        <div className="layout-content">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
