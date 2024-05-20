import { DanhSachdata } from "../../library/DuLieuGia";
import "./danhSachPage.scss";
import SangLoc from "../../components/sangLoc/SangLoc";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

export default function DanhSachPage() {
    const data = DanhSachdata;
  return (
    <div className="danhSachPage">
        <div className="chuaDanhSach">
          <div className="padding">
            <SangLoc/>
            {data.map(muc=>(
              <Card key={muc.id} muc={muc}/>
            ))}
          </div>
        </div>
        <div className="chuaMap">
          <Map nhungMuc={data}/>
        </div>
    </div>
  )
}