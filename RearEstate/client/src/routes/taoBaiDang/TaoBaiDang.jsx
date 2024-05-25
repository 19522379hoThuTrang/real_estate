import React from "react";
import "./taoBaiDang.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../library/apiRequest";
import TaiAnhLen from "../../components/taiAnhLen/TaiAnhLen";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
        },
        postDetail: {
          moTa: value,
          dienTich: parseInt(inputs.dienTich),
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
              <input id="tinhThanh" name="tinhThanh" type="text" />
            </div>
            <div className="item">
              <label htmlFor="kinhDo">kinh độ</label>
              <input id="kinhDo" name="kinhDo" type="text" />
            </div>
            <div className="item">
              <label htmlFor="viDo">Vĩ độ</label>
              <input id="viDo" name="viDo" type="text" />
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
            <div className="item">
              <label htmlFor="congVien">Công viên</label>
              <input min={0} id="congVien" name="congVien" type="number" />
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
