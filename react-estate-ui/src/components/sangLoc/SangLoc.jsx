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
            id="city" 
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
            <option value="trangTrai&KhuNghiDuong">Trang trại và khu nghỉ dưỡng</option>
            <option value="kho&nhaXuong">Kho và nhà xưởng</option>
          </select>
        </div>

        <div className="muc">
          <h6 htmlFor="giaThapNhat">Giá thấp nhất</h6>
          <input 
            type="number" 
            id="giaThapNhat" 
            name="giaThapNhat" 
            placeholder="Từ"
          />
        </div>

        <div className="muc">
          <h6 htmlFor="GiaCaoNhat">Giá cao nhất</h6>
          <input 
            type="number" 
            id="giaCaoNhat" 
            name="giaCaoNhat" 
            placeholder="Đến"
          />
        </div>
      </div>

      <div className="bottom">
      <div className="muc">
            <h6 htmlFor="dienTichNhoNhat">Diện tích nhỏ nhất</h6>
            <input
              type="number" 
              id="dienTichNhoNhat" 
              name="dienTichNhoNhat" 
              placeholder="Từ"
            />
          </div>

        <div className="muc">
          <h6 htmlFor="dienTichLonNhat">Diện tích lớn nhất</h6>
          <input 
            type="number" 
            id="dienTichLonNhat" 
            name="dienTichLonNhat" 
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
