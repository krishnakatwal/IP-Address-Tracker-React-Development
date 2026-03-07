import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import iconUrl from "../assets/images/icon-location.svg";

// Fix default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const customIcon = L.icon({
  iconUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Recenter({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], map.getZoom());
  return null;
}

function Map({ data }) {
  const lat = data?.location?.lat || 51.505;
  const lng = data?.location?.lng || -0.09;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      //  style={{ height: "400px", width: "100%" }}
      className="w-full h-[60vh]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {/* Use the custom icon */}
      <Marker position={[lat, lng]} icon={customIcon} />
      <Recenter lat={lat} lng={lng} />
    </MapContainer>
  );
}

export default Map;
