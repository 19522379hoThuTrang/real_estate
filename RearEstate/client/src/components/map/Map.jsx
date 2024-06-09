import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Chot from "../chot/Chot";

export default function Map({ nhungMuc }) {
  return (
    <MapContainer
      center={
        nhungMuc.length === 1
          ? [nhungMuc[0].viDo, nhungMuc[0].kinhDo]
          : [14.51371, 108.45273]
      }
      zoom={5.5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nhungMuc.map((muc) => (
        <Chot muc={muc} key={muc.id} />
      ))}
    </MapContainer>
  );
}
