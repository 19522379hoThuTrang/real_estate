import './danhSach.scss'
import Card from "../card/Card"

export default function DanhSach({posts}) {
  return (
    <div className='danhSach'>
        {posts.map(muc=>(
              <Card key={muc.id} muc={muc}/>
        ))}
    </div>
  )
}
