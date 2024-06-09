import DanhSach from "../../components/danhSach/DanhSach";
import "./hoSoPage.scss";
import Chat from "../../components/chat/Chat";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import apiRequest from "../../library/apiRequest";
import { AuthContext } from "../../context/AuthContext";

export default function HoSoPage() {
  const data = useLoaderData();
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
            <h1>Những bất động sản của bạn</h1>
            <Link to="/dangBai">
              <button>Tạo bài đăng mới</button>
            </Link>
          </div>
          <Suspense fallback={<p>Vui lòng đợi trong giây lát...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Lỗi tải dữ liệu</p>}
            >
              {(postResponse) => (
                <DanhSach posts={postResponse.data.userPosts} />
              )}
            </Await>
          </Suspense>
          <div className="tieuDe">
            <h1>Những bất động sản bạn đã lưu</h1>
          </div>
          <Suspense fallback={<p>Vui lòng chờ trong giây lát...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Lỗi tải dữ liệu</p>}
            >
              {(postResponse) => (
                <DanhSach posts={postResponse.data.savedPosts} />
              )}
            </Await>
          </Suspense>
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
