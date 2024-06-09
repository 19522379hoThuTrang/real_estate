import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const nhieuMucDich = ["ban", "thue"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    mucDich: "ban",
    tinhThanh: "",
    giaMin: 0,
    giaMax: 0,
  });

  const switchMucDich = (val) => {
    setQuery((prev) => ({ ...prev, mucDich: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      {nhieuMucDich.map((mucDich) => (
        <button
          key={mucDich}
          onClick={() => switchMucDich(mucDich)}
          className={query.mucDich === mucDich ? "hoatDong" : ""}
        >
          {mucDich}
        </button>
      ))}
      <form>
        <select name="tinhThanh" className="tinhThanh" onChange={handleChange}>
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
        <input
          type="number"
          name="giaMin"
          min={0}
          max={99999999999999}
          placeholder="giá từ bao nhiêu triệu"
          onChange={handleChange}
        />
        <input
          type="number"
          name="giaMax"
          min={0}
          max={99999999999999}
          placeholder="Giá đến bao nhiêu triệu"
          onChange={handleChange}
        />
        <Link
          to={`/danhSach?mucDich=${query.mucDich}&tinhThanh=${query.tinhThanh}&giaMin=${query.giaMin}&giaMax=${query.giaMax}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}
