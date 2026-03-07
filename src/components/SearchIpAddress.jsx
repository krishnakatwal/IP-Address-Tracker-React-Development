import { useMemo, useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import DisplayIpAddress from "./DisplayIpAddress";
import useFetch from "../hooks/useFetch";
import Map from "./Map";
import useIpValidation from "../hooks/useIpValidation";

//Load API key from environment
const key = import.meta.env.VITE_API_KEY;

function SearchIpAddress() {
  //storing user input
  const [ip, setIp] = useState(""); //storing user input
  // stores IP to fetch
  const [searchIp, setSearchIp] = useState("");
  const [errorValidation, setErrorValidation] = useState("");

  //Build fetch URL dynamically
  //custom hook
  const fetchUrl = useMemo(() => {
    `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
      searchIp ? `&ipAddress=${searchIp}` : ""
    }`;
  }, [searchIp]);
  const { data, loading, error } = useFetch(fetchUrl);
  // Top-level hook call
  const { validateIp } = useIpValidation();

  // const { errors, validateIp } = useIpValidation(inputValue);

  //  Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = ip.trim();

    const errors = validateIp(inputValue); // run validation
    setErrorValidation(errors);

    if (errors) return; // stop if invalid

    setSearchIp(inputValue);
    setIp("");

    // // Validate using hook
    // if (!validateIp) return;
    // setSearchIp(inputValue);
    // setErrorValidation("");
    // setIp("");
  };

  //  debug API key
  console.log("API Key:", key);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="relative z-20 bg-[url('/src/assets/images/pattern-bg-desktop.png')] bg-cover bg-center min-h-[280px] pt-[30px] px-6 text-center">
        <h1 className=" text-3xl font-semibold">IP Address Tracker</h1>

        {/* Input and search button */}
        <form
          onSubmit={handleSubmit}
          className="flex mx-auto max-w-[500px] shadow-2xl rounded-lg overflow-hidden mt-6"
        >
          <input
            type="text"
            id="ip-input"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Search for any IP address or domain"
            className="flex-1 py-[14px] px-[18px] text-[18px] border-none rounded-l-lg outline-none bg-white text-gray-800 h-[50px]"
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
        {loading && <p className="mt-2 text-gray-700"> Loading...</p>}
        {error && <p className="mt-2 text-red-500">Error fetching IP data.</p>}

        {/* Floating Card (DisplayIpAddress) */}

        {data && (
          <div className="absolute top-[230px] left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-[1100px]">
            <DisplayIpAddress data={data} />
          </div>
        )}
      </div>
      {/* Map Section */}
      {data && (
        <div className="relative flex-1 w-full mt-[120px]">
          {/* Ensure the map container has full height */}
          <div className="h-[65vh] w-full">
            <Map data={data} />
          </div>
        </div>
      )}
    </div>
  );
}
export default SearchIpAddress;
