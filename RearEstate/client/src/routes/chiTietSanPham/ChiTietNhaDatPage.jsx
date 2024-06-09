import "./chiTietNhaDatPage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../library/apiRequest";

export default function ChiTietNhaDatPage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="chiTietSanPhamPage">
      <div className="chiTiet">
        <div className="padding">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="baiDang">
                <h1>{post.tieuDe}</h1>
                <div className="diaChi">
                  <img src="/pin.png" alt="" />
                  <span>{post.diaChi}</span>
                </div>
                <div className="gia">
                  {post.gia > 999
                    ? post.gia / 1000 + " tỷ"
                    : post.postDetail.sieuThi + " triệu"}
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.moTa),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="nhungDacDiem">
        <div className="padding">
          <p className="tieuDe">Những thông tin thêm</p>
          <div className="danhSachDoc">
            <div className="mucDich">
              <span>Mục đích: </span>
              {post.mucDich == "ban" ? <span>Bán</span> : <span>Thuê</span>}
            </div>
            <div className="dienTich">
              <img src="/size.png" alt="" />
              <span>{post.dienTich} m2</span>
            </div>
            <div className="noiThat">
              <img src="/noiThat.jpg" alt="" />
              {post.mucDich == "nhaTrong" ? (
                <span>Nhà trống</span>
              ) : (
                <span>Đầy đủ nội thất</span>
              )}
            </div>
          </div>
          <p className="tieuDe">Những địa điểm gần đó</p>
          <div className="danhSachNgang">
            <div className="dacDiem">
              <img src="/school.png" alt="" />
              <div className="dacDiemText">
                <span>Trường học</span>
                <p>
                  {post.postDetail.truongHoc > 999
                    ? post.postDetail.truongHoc / 1000 + "km"
                    : post.postDetail.truongHoc + "m"}
                </p>
              </div>
            </div>
            <div className="dacDiem">
              <img src="/sieuThi.png" alt="" />
              <div className="dacDiemText">
                <span>Siêu thị</span>
                <p>
                  {post.postDetail.sieuThi > 999
                    ? post.postDetail.sieuThi / 1000 + "km"
                    : post.postDetail.sieuThi + "m"}
                </p>
              </div>
            </div>
            <div className="dacDiem">
              <img src="/benhVien.png" alt="" />
              <div className="dacDiemText">
                <span>Bệnh viện</span>
                <p>
                  {post.postDetail.benhVien > 999
                    ? post.postDetail.benhVien / 1000 + "km"
                    : post.postDetail.benhVien + "m"}
                </p>
              </div>
            </div>
          </div>
          <p className="tieuDe">Địa chỉ</p>
          <div className="chuaMap">
            <Map nhungMuc={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Hãy liên lạc để được hỗ trợ
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Địa điểm đã được lưu" : "Lưu địa điểm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
