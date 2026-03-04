import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Map from "./components/Map";
import SearchIpAdd from "./components/SearchIpAddress";

function App() {
  return (
    <>
  <Map/>
  <SearchIpAdd/>
    </>
  );
}

export default App;
