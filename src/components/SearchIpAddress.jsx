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
    <div>
      {/* Input and search button */}
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          id="ip-input"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any IP address or domain"
          className="border border-blue-300 rounded-md p-2"
        />

        <button className="bg-red-500" type="submit" id="search-btn">
          <img src={arrowIcon} alt="Search" className="w-4 h-4" />
        </button>
      </form>

      {/* Loading and error */}
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching IP data.</p>}

      {/* Display IP info */}

      {data && (
        <div>
          <DisplayIpAddress data={data} />
          <Map data={data} />
        </div>
      )}
    </div>
  );
}
export default SearchIpAddress;
