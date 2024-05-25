import "./sangLoc.scss";

export default function SangLoc() {
  return (
    <div className="sangLoc">
      <h1>Tìm ngay bất động sản bán hoặc cho thuê mới nhất tại Việt Nam</h1>
      <div className="top">
        <div className="muc">
          <h5 htmlFor="tinhThanhPho">Tỉnh hay Thành phố</h5>
          <input 
            type="text" 
            id="tinhThanh" 
            name="tinhThanhPho" 
            placeholder="Nhập Tỉnh hay Thành phố"
          />
        </div>
      </div>
      <div className="media">
        <div className="muc">
            <h6 htmlFor="mucDich">Mục đích</h6>
            <select name="mucDich" id="type">
              <option value={"mua"}>Mua</option>
              <option value={"thuê"}>Thuê</option>
            </select>
        </div>

        <div className="muc">
          <h6 htmlFor="loaiNhaDat">Loại nhà đất</h6>
          <select name="loaiNhaDat" className="loaiNhaDat" id="taiSan">
            <option value="">Tất cả nhà đất</option>
            <option value="canHoChungCu">Căn hộ chung cư</option>
            <option value="nhaRieng">Nhà riêng</option>
            <option value="nhaBietThu">Nhà biệt thự</option>
            <option value="nhaMatPho">Nhà mặt phố</option>
            <option value="nhaPhoThuongMai">Nhà phố thương mại</option>
            <option value="dat">Đất</option>
            <option value="datNenDuAn">Đất nền dự án</option>
            <option value="trangTraiKhuNghiDuong">Trang trại và khu nghỉ dưỡng</option>
            <option value="khoNhaXuong">Kho và nhà xưởng</option>
          </select>
        </div>

        <div className="muc">
          <h6 htmlFor="giaMin">Giá từ</h6>
          <input 
            type="number" 
            id="giaMin" 
            name="giaMin" 
            placeholder="Từ"
          />
        </div>

        <div className="muc">
          <h6 htmlFor="giaMax">Giá đến</h6>
          <input 
            type="number" 
            id="giaMax" 
            name="giaMax" 
            placeholder="Đến"
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
              placeholder="Từ"
            />
          </div>

        <div className="muc">
          <h6 htmlFor="dienTichMax">Diện tích đến</h6>
          <input 
            type="number" 
            id="dienTichMax" 
            name="dienTichMax" 
            placeholder="Đến"
          />
        </div>
        <button>
          <img src="/search.png" alt=""/>
        </button>
      </div>
    </div>
  )
}
