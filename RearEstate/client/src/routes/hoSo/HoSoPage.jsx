import DanhSach from "../../components/danhSach/DanhSach";
import "./hoSoPage.scss";
import Chat from "../../components/chat/Chat";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import apiRequest from "../../library/apiRequest";
import { AuthContext } from "../../context/AuthContext";

export default function HoSoPage() {
  // const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hoSoPage">
      <div className="details">
        <div className="padding">
          <div className="tieuDe">
            <h1>Thông tin cá nhân</h1>
            <Link to="/hoSo/capNhat">
              <button>Cập nhật hồ sơ</button>
            </Link>
          </div>
          <div className="personalInfo">
            <span>
              Avatar:
              <img src={currentUser.avatar || "noavatar.png"} alt="" />
            </span>
            <span>
              Họ tên: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
          <div className="tieuDe">
            <h1>Những bất động sản đã đăng</h1>
            <Link to="/dangBai">
              <button>Tạo bài đăng mới</button>
            </Link>
          </div>
          <DanhSach />
          <div className="tieuDe">
            <h1>Đã lưu danh sách</h1>
          </div>
        </div>
      </div>
      <div className="chuaChat">
        <div className="padding">
          <Chat />
        </div>
      </div>
    </div>
  );
}
