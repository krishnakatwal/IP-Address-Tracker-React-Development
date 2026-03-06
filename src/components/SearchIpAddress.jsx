import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import DisplayIpAddress from "./DisplayIpAddress";
import useFetch from "../hooks/useFetch";
import Map from "./Map";

//Load API key from environment
const key = import.meta.env.VITE_API_KEY;

function SearchIpAddress() {
  const [ip, setIp] = useState(""); //storing user input
  const [searchIp, setSearchIp] = useState(""); // stores IP to fetch

  //Build fetch URL dynamically
  const fetchUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
    searchIp ? `&ipAddress=${searchIp}` : ""
  }`;
  //custom hook
  const { data, loading, error } = useFetch(fetchUrl);

  //  Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchIp(ip);
  };

  //  debug API key
  // console.log("API Key:", key);

  return (
    <div className="flex flex-col min-h-screen  ">
      {/* Header Section */}
      <div className="relative z-20  bg-[url('/src/assets/images/pattern-bg-desktop.png')] bg-cover bg-center min-h-[280px] pt-[30px] px-6 text-center">
        <h1 className=" text-3xl font-semibold">IP Address Tracker</h1>

        {/* Input and search button */}
        <form
          onSubmit={handleSubmit}
          className="flex mx-auto max-w-[500px] shadow-2xl rounded-lg overflow-hidden"
        >
          <input
            type="text"
            id="ip-input"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Search for any IP address or domain"
            className="flex-1 py-[14px] px-[18px] text-[18px] border-none rounded-l-lg outline-none bg-white text-gray-800 w-[50px] h-[50px] "
          />

          <button
            className="bg-black hover:bg-gray-700 transition-colors w-[50px] h-[50px] flex items-center justify-center"
            type="submit"
            id="search-btn"
          >
            <img src={arrowIcon} alt="Search" className="w-4 h-[18px]" />
          </button>
        </form>

        {/* Loading and error */}
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching IP data.</p>}

        {/* Floating Card (DisplayIpAddress) */}

        {data && (
          <div className="absolute top-[230px] left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[1100px]">
            <DisplayIpAddress data={data} />
          </div>
        )}
      </div>
      {/* map*/}
      {data && (
        <div className="flex-1 h-[65vh] w-full z-0 -mt-[50px]">
          <Map data={data} />
        </div>
      )}
    </div>
  );
}
export default SearchIpAddress;
