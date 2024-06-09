import "./card.scss"
import { Link } from "react-router-dom"

export default function Card({muc}) {
  return (
    <div className="card">
      <Link to={`/$muc.id`} className="chuaImg">
        <img src={muc.images[0]} alt=""/>
      </Link>
      <div className="chuaText">
        <h2 className="tieuDe">
          <Link to={`/${muc.id}`}>{muc.tieuDe}</Link>
        </h2>
        <p className="diaChi">
          <img src="/pin.png" alt=""/>
          <span>{muc.diaChi}</span>
          <span>{muc.tinhThanh}</span>
        </p>
        <p className="gia">{muc.gia} triệu vnđ</p>
        <p className="dienTich">{muc.dienTich} m2</p>
         <div className="icons">
          <div className="icon">
            <img src="/save.png" alt=""/>
          </div>
          <div className="icon">
            <img src="/chat.png" alt=""/>
          </div>
        </div>
      </div> 
    </div>
  )
}
