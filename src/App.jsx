import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Map from "./components/Map";
import SearchIpAddress from "./components/SearchIpAddress";
import DisplayIpAddress from "./components/DisplayIpAddress";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
      <DisplayIpAddress />
      <SearchIpAddress />
      <Map />
    </>
  );
}

export default App;
