import { useState } from "react";
import "./taoBaiDang.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../library/apiRequest";
import TaiAnhLen from "../../components/taiAnhLen/TaiAnhLen";
import { useNavigate } from "react-router-dom";

export default function TaoBaiDang() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          tieuDe: inputs.tieuDe,
          gia: parseInt(inputs.gia),
          diaChi: inputs.diaChi,
          tinhThanh: inputs.tinhThanh,
          mucDich: inputs.mucDich,
          loaiNhaDat: inputs.loaiNhaDat,
          kinhDo: inputs.kinhDo,
          viDo: inputs.viDo,
          images: images,
          dienTich: parseInt(inputs.dienTich),
        },
        postDetail: {
          moTa: value,
          noiThat: inputs.noiThat,
          truongHoc: parseInt(inputs.truongHoc),
          sieuThi: parseInt(inputs.sieuThi),
          benhVien: parseInt(inputs.benhVien),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };
  return (
    <div className="taoBaiDang">
      <div className="chuaForm">
        <h1>Add New Post</h1>
        <div className="padding">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="tieuDe">Tiêu đề</label>
              <input id="tieuDe" name="tieuDe" type="text" />
            </div>
            <div className="item">
              <label htmlFor="gia">Giá</label>
              <input id="gia" name="gia" type="number" />
              <span>triệu</span>
            </div>
            <div className="item">
              <label htmlFor="diaChi">Địa chỉ</label>
              <input id="diaChi" name="diaChi" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="moTa">Mô Tả</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="tinhThanh">Tỉnh thành</label>
              <select name="tinhThanh" className="tinhThanh" id="taiSan">
                <option value="">Chọn tỉnh thành</option>
                <option value="HaGiang">Hà Giang</option>
                <option value="TuyenQuang">Tuyên Quang</option>
                <option value="CaoBang">Cao Bằng</option>
                <option value="LangSon">Lạng Sơn</option>
                <option value="BacGiang">Bắc Giang</option>
                <option value="QuangNinh">Quảng Ninh</option>
                <option value="BacKan">Bắc Kạn</option>
                <option value="ThaiNguyen">Thái Nguyên</option>
                <option value="PhuTho">Phú Thọ</option>
                <option value="HoaBinh">Hoà Bình</option>
                <option value="SonLa">Sơn La</option>
                <option value="DienBien">Điện Biên Phủ</option>
                <option value="LaiChau">Lai Châu</option>
                <option value="LaoCai">Lào Cai</option>
                <option value="YenBai">Yên Bái</option>
                <option value="HaNoi">Hà Nội</option>
                <option value="BacNinh">Bắc Ninh</option>
                <option value="HaNam">Hà Nam</option>
                <option value="HaiDuong">Hải Dương</option>
                <option value="HaiPhong">Hải Phòng</option>
                <option value="HungYen">Hưng Yên</option>
                <option value="NamDinh">Nam Định</option>
                <option value="ThaiBinh">Thái Bình</option>
                <option value="VinhPhuc">Vĩnh Phúc</option>
                <option value="NinhBinh">Ninh Bình</option>
                <option value="ThanhHoa">Thanh Hoá</option>
                <option value="NgheAn">Nghệ An</option>
                <option value="HaTinh">Hà Tỉnh</option>
                <option value="QuangBinh">Quảng Bình</option>
                <option value="QuangTri">Quảng Trị</option>
                <option value="ThuaThienHue">Thừa Thiên Huế</option>
                <option value="DaNang">Đà Nẵng</option>
                <option value="QuangNam">Quảng Nam</option>
                <option value="QuangNgai">Quảng Ngãi</option>
                <option value="BinhDinh">Bình Định</option>
                <option value="PhuYen">Phú Yên</option>
                <option value="KhanhHoa">Khánh Hoà</option>
                <option value="NinhThuan">Ninh Thuận</option>
                <option value="BinhThuan">Bình Thuận</option>
                <option value="KonTum">Kon Tum</option>
                <option value="GiaLai">Gia Lai</option>
                <option value="DakLak">Đắk Lắk</option>
                <option value="DakNong">Đắk Nông</option>
                <option value="LamDong">Lâm Đồng</option>
                <option value="HoChiMinh">Hồ Chí Minh</option>
                <option value="BaRiaVungTau">Bà Rịa - Vũng Tàu</option>
                <option value="BinhDuong">Bình Dương</option>
                <option value="BinhPhuoc">Bình Phước</option>
                <option value="DongNai">Đồng Nai</option>
                <option value="TayNinh">Tây Ninh</option>
                <option value="AnGiang">An Giang</option>
                <option value="CaMau">Cà Mau</option>
                <option value="BacLieu">Bạc Liêu</option>
                <option value="SocTrang">Sóc Trăng</option>
                <option value="TienGiang">Tiền Giang</option>
                <option value="KienGiang">Kiên Giang</option>
                <option value="BenTre">Bến Tre</option>
                <option value="LongAn">Long An</option>
                <option value="DongThap">Đồng Tháp</option>
                <option value="CanTho">Cần Thơ</option>
                <option value="TraVinh">Trà Vinh</option>
                <option value="VinhLong">Vĩnh Long</option>
                <option value="PhuQuoc">Phú Quốc</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="viDo">Vĩ độ</label>
              <input id="viDo" name="viDo" type="text" />
            </div>
            <div className="item">
              <label htmlFor="kinhDo">Kinh độ</label>
              <input id="kinhDo" name="kinhDo" type="text" />
            </div>
            <div className="item">
              <label htmlFor="mucDich">Mục đích</label>
              <select name="mucDich">
                <option value="thue" defaultChecked>
                  Thuê
                </option>
                <option value="ban">Bán</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="loaiNhaDat">Loại nhà đất</label>
              <select name="loaiNhaDat">
                <option value="">Tất cả nhà đất</option>
                <option value="canHoChungCu">Căn hộ chung cư</option>
                <option value="nhaRieng">Nhà riêng</option>
                <option value="nhaBietThu">Nhà biệt thự</option>
                <option value="nhaMatPho">Nhà mặt phố</option>
                <option value="nhaPhoThuongMai">Nhà phố thương mại</option>
                <option value="dat">Đất</option>
                <option value="datNenDuAn">Đất nền dự án</option>
                <option value="trangTraiKhuNghiDuong">
                  Trang trại và khu nghỉ dưỡng
                </option>
                <option value="khoNhaXuong">Kho và nhà xưởng</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="dienTich">Diện tích</label>
              <input min={0} id="dienTich" name="dienTich" type="number" />
            </div>
            <div className="item">
              <label htmlFor="noiThat">Nội thất</label>
              <select name="noiThat">
                <option value="nhaTrong" defaultChecked>
                  Nhà trống
                </option>
                <option value="noiThatDayDu">Nội thất đầy đủ</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="truongHoc">Trường học</label>
              <input min={0} id="truongHoc" name="truongHoc" type="number" />
            </div>
            <div className="item">
              <label htmlFor="sieuThi">Siêu thị</label>
              <input min={0} id="sieuThi" name="sieuThi" type="number" />
            </div>
            <div className="item">
              <label htmlFor="benhVien">Bệnh viện</label>
              <input min={0} id="benhVien" name="benhVien" type="number" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="chuaSide">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <TaiAnhLen
          uwConfig={{
            multiple: true,
            cloudName: "dn25lhgkt",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}
