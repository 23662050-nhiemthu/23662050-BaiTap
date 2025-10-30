import "./assets/css/layout.css";
import logo from "./assets/images/Ten-truong-do-1000x159.png";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="header">
        {/* Thanh đầu gồm menu trái, logo, tìm kiếm */}
        <div className="banner">
          {/* Menu trái */}
          <nav className="menu-left">
            <ul>
              <li>
                <a href="/">TRANG CHỦ</a>
              </li>
              <li>
                <a href="/trang1">EGOV</a>
              </li>
              <li>
                <a href="/trang2">SINH VIÊN</a>
              </li>
            </ul>
          </nav>

          {/* Logo giữa */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Ô tìm kiếm bên phải */}
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm..." />
            <button>Tìm</button>
          </div>
        </div>

        {/* Thanh menu đỏ bên dưới */}
        <div className="menu-bar">
          <ul>
            <li>
              <a href="#">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="#">TIN TỨC - SỰ KIỆN</a>
            </li>
            <li>
              <a href="#">TUYỂN SINH</a>
            </li>
            <li>
              <a href="#">CÔNG KHAI GIÁO DỤC</a>
            </li>
            <li>
              <a href="#">CƠ CẤU TỔ CHỨC</a>
            </li>
            <li>
              <a href="#">LIÊN KẾT</a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
