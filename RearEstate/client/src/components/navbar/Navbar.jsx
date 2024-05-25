import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [Mo, setMo] = useState(false);

  const{currentUser} = useContext(AuthContext)

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
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.png"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/hoSo" className="hoSo">
              <div className="thongBao">3</div>
              <span>Hồ sơ</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Đăng nhập</a>
            <a href="/dangKy" className="register">
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
