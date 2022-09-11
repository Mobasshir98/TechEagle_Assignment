import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import osm from "./osm_providers";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

let markerIcon = new L.Icon({
  iconUrl: require("../images/drone.png"),
  iconSize: [55, 65],
});
const MapComponent = ({ data }) => {
  let center = [data.lat || 77.0788189, data.long || 28.508015];

  const zoom_level = 7;
  return (
    <div>
      <MapContainer center={center} zoom={zoom_level}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />

        <Marker position={center} icon={markerIcon} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
