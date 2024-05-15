import { DanhSachdata } from "../../library/DuLieuGia";
import "./danhSachPage.scss";
import SangLoc from "../../components/sangLoc/SangLoc";
import Card from "../../components/card/Card";

export default function DanhSachPage() {
    const data = DanhSachdata;
  return (
    <div className="danhSachPage">
        <div className="chuaDanhSach">
          <div className="padding">
            <SangLoc/>
            {data.map(dacDiem=>(
              <Card key={dacDiem.id} dacDiem={dacDiem}/>
            ))}
          </div>
        </div>
        <div className="chuaMap">map</div>
    </div>
  )
}
