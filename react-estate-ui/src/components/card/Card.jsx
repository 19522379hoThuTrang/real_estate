import "./card.scss"
import { Link } from "react-router-dom"

export default function Card({dacDiem}) {
  return (
    <div className="card">
      <Link to={`/$dacDiem.id`} className="chuaImg">
        <img src={dacDiem.img} alt=""/>
      </Link>
      <div className="chuaText">
        <h2 className="tieuDe">
          <Link to={`/${dacDiem.id}`}>{dacDiem.title}</Link>
        </h2>
        <p className="diaChi">
          <img src="/pin.png" alt=""/>
          <span>{dacDiem.address}</span>
        </p>
        <p className="gia">${dacDiem.price}</p>
        {/* <p className="dienTich">${dacDiem.dienTich}</p> */}
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
