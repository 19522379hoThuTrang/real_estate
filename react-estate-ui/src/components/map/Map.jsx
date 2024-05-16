import "./map.scss";
import {MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Chot from "../chot/Chot";

export default function Map({nhungMuc}) {
  return (
    <MapContainer center={[10.815498473929516, 106.61695003438851]} zoom={10} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nhungMuc.map(muc=>(
        <Chot muc={muc} key={muc.id}/>
      ))}
    </MapContainer>
  );
}
