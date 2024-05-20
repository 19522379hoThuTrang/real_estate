import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [Mo, setMo] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>BẤT ĐỘNG SẢN</span>
        </a>
        <a href="/">Trang chủ</a>
        <a href="/">Liên hệ</a>
        <a href="/">Đại lý</a>
        <a href="/">Tin tức</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Trần Thanh Tuyền</span>
            <Link to="/hoSo" className="hoSo">
              <div className="thongBao">3</div>
              <span>Hồ sơ</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Đăng nhập</a>
            <a href="/" className="register">
              Đăng ký
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setMo((prev) => !prev)} />
        </div>
        <div className={Mo ? "menu hoatDong" : "menu"}>
          <a href="/">Trang chủ</a>
          <a href="/">Liên hệ</a>
          <a href="/">Đại lý</a>
          <a href="/">Tin tức</a>
          <a href="/">Đăng nhập</a>
          <a href="/">Đăng ký</a>
        </div>
      </div>
    </nav>
  );
}
