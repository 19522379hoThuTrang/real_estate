import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
    const [Mo,setMo] = useState(false)
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
            <a href="/">Đăng nhập</a>
            <a href="/" className="register">
                Đăng ký
            </a>
            <div className="menuIcon">
                <img 
                    src="/menu.png" 
                    alt="" 
                    onClick={() => setMo((prev) => !prev)}
                />
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
  )
}
