import './danhSach.scss'
import Card from "../card/Card"
import {DanhSachdata} from "../../library/DuLieuGia"

export default function DanhSach() {
  return (
    <div className='danhSach'>
        {DanhSachdata.map(muc=>(
              <Card key={muc.id} muc={muc}/>
        ))}
    </div>
  )
}
