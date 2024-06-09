import "./sangLoc.scss";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function SangLoc() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    mucDich: searchParams.get("mucDich") || "",
    tinhThanh: searchParams.get("tinhThanh") || "",
    loaiNhaDat: searchParams.get("loaiNhaDat") || "",
    giaMin: searchParams.get("giaMin") || "",
    giaMax: searchParams.get("giaMax") || "",
    dienTichMin: searchParams.get("dienTichMin") || "",
    dienTichMax: searchParams.get("dienTichMax") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };
  return (
    <div className="sangLoc">
      <h1>
        Kết quả bất động sản ở <b>{searchParams.get("tinhThanh")}</b>
      </h1>
      <div className="top">
        <div className="muc">
          <h6 htmlFor="tinhThanh">Chọn tỉnh thành</h6>
          <select
            name="tinhThanh"
            className="tinhThanh"
            id="tinhThanh"
            onChange={handleChange}
            defaultValue={query.tinhThanh}
          >
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
      </div>
      <div className="media">
        <div className="muc">
          <h6 htmlFor="mucDich">Mục đích</h6>
          <select
            name="mucDich"
            id="mucDich"
            onChange={handleChange}
            defaultValue={query.mucDich}
          >
            <option value={"ban"}>Bán</option>
            <option value={"thue"}>Thuê</option>
          </select>
        </div>

        <div className="muc">
          <h6 htmlFor="loaiNhaDat">Loại nhà đất</h6>
          <select
            name="loaiNhaDat"
            className="loaiNhaDat"
            id="loaiNhaDat"
            onChange={handleChange}
            defaultValue={query.loaiNhaDat}
          >
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

        <div className="muc">
          <h6 htmlFor="giaMin">Giá từ</h6>
          <input
            type="number"
            id="giaMin"
            name="giaMin"
            placeholder="Bao nhiêu triệu"
            onChange={handleChange}
            defaultValue={query.giaMin}
          />
        </div>

        <div className="muc">
          <h6 htmlFor="giaMax">Giá đến</h6>
          <input
            type="number"
            id="giaMax"
            name="giaMax"
            placeholder="Bao nhiêu triệu"
            onChange={handleChange}
            defaultValue={query.giaMax}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="muc">
          <h6 htmlFor="dienTichMin">Diện tích từ</h6>
          <input
            type="number"
            id="dienTichMin"
            name="dienTichMin"
            placeholder="Bao nhiêu m2"
            onChange={handleChange}
            defaultValue={query.dienTichMin}
          />
        </div>

        <div className="muc">
          <h6 htmlFor="dienTichMax">Diện tích đến</h6>
          <input
            type="number"
            id="dienTichMax"
            name="dienTichMax"
            placeholder="Bao nhiêu m2"
            onChange={handleChange}
            defaultValue={query.dienTichMax}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
