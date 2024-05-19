import "./map.scss";
import {MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Chot from "../chot/Chot";

export default function Map({nhungMuc}) {
  return (
    <MapContainer center={[14.683817411850402, 107.92538377353588]} zoom={5.5} scrollWheelZoom={false} className="map">
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
