import "./chiTietNhaDatPage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { chiTietSanPhamData, userData } from "../../library/DuLieuGia";
import { useLoaderData } from "react-router-dom";

export default function ChiTietNhaDatPage() {
  // const chiTietSanPhamData = useLoaderData();
  console.log(chiTietSanPhamData);
  return (
    <div className="chiTietSanPhamPage">
      <div className="chiTiet">
        <div className="padding">
          <Slider images={chiTietSanPhamData.images} />
          <div className="info">
            <div className="top">
              <div className="baiDang">
                <h1>{chiTietSanPhamData.tieuDe}</h1>
                <div className="diaChi">
                  <img src="/pin.png" alt="" />
                  <span>{chiTietSanPhamData.diaChi}</span>
                </div>
                <div className="gia">{chiTietSanPhamData.gia} vnđ</div>
              </div>
              <div className="user">
                <img src={userData.image} alt="" />
                <span>{userData.hoTen}</span>
              </div>
            </div>
            <div className="bottom">{chiTietSanPhamData.moTa}</div>
          </div>
        </div>
      </div>
      <div className="nhungDacDiem">
        <div className="padding">
          <p className="tieuDe">Những thông tin thêm</p>
          <div className="danhSachDoc">
            <div className="mucDich">
              <span>bán</span>
            </div>
            <div className="dienTich">
              <img src="/size.png" alt="" />
              <span>80 m2</span>
            </div>
            <div className="noiThat">
              <img src="/noiThat.jpg" alt="" />
              <span>nhà trống</span>
            </div>
          </div>
          <p className="tieuDe">Những địa điểm gần đó</p>
          <div className="danhSachNgang">
            <div className="dacDiem">
              <img src="/school.png" alt="" />
              <div className="dacDiemText">
                <span>Trường học</span>
                <p>250 m</p>
              </div>
            </div>
            <div className="dacDiem">
              <img src="/sieuThi.png" alt="" />
              <div className="dacDiemText">
                <span>Siêu thị</span>
                <p>100m</p>
              </div>
            </div>
            <div className="dacDiem">
              <img src="/congVien.png" alt="" />
              <div className="dacDiemText">
                <span>Công viên</span>
                <p>300 m</p>
              </div>
            </div>
          </div>
          <p className="tieuDe">Địa chỉ</p>
          <div className="chuaMap">
            <Map nhungMuc={[chiTietSanPhamData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Hãy liên lạc để được hỗ trợ
            </button>
            <button>
              <img src="/save.png" alt="" />
              Lưu địa điểm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
