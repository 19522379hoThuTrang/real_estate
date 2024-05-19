import "./card.scss"
import { Link } from "react-router-dom"

export default function Card({muc}) {
  return (
    <div className="card">
      <Link to={`/$muc.id`} className="chuaImg">
        <img src={muc.image} alt=""/>
      </Link>
      <div className="chuaText">
        <h2 className="tieuDe">
          <Link to={`/{muc.id}`}>{muc.tieuDe}</Link>
        </h2>
        <p className="diaChi">
          <img src="/pin.png" alt=""/>
          <span>{muc.diaChi}</span>
        </p>
        <p className="gia">{muc.gia} vnđ</p>
        {/* <p className="dienTich">${muc.dienTich}</p> */}
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
