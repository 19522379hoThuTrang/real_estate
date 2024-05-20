import DanhSach from "../../components/danhSach/DanhSach";
import "./hoSoPage.scss";
import Chat from "../../components/chat/Chat";

export default function HoSoPage() {
  return (
    <div className="hoSoPage">
      <div className="details">
        <div className="padding">
          <div className="tieuDe">
            <h1>Thông tin cá nhân</h1>
            <button>Cập nhật hồ sơ</button>
          </div>
          <div className="personalInfo">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Họ tên: <b>Trần Thanh Tuyền</b>
            </span>
            <span>
              Email: <b>ThanhTuyen@gmail.com</b>
            </span>
          </div>
          <div className="tieuDe">
            <h1>Những bất động sản đã đăng</h1>
            <button>Tạo bài đăng mới</button>
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
