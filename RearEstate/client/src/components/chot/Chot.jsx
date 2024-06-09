import { Marker,Popup } from 'react-leaflet';
import "./chot.scss";
import { Link } from 'react-router-dom';

export default function Chot({muc}) {
  return (
    <Marker position={[muc.viDo, muc.kinhDo]}>
        <Popup>
          <div className='chuaCuaSoBat'>
            <img src={muc.images[0]} alt=''/>
            <div className='chuaText'>
              <Link to={`/${muc.id}`}>{muc.tieuDe}</Link>
              <b>{muc.gia} triệu vnđ</b>
            </div>
          </div>
        </Popup>
      </Marker>
  )
}
