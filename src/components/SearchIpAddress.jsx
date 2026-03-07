import { useMemo, useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import DisplayIpAddress from "./DisplayIpAddress";
import Map from "./Map";
import useFetch from "../hooks/useFetch";
import useIpValidation from "../hooks/useIpValidation";

// Load API key from environment
const key = import.meta.env.VITE_API_KEY;

function SearchIpAddress() {
  // IP validation hook
  const { validateIp } = useIpValidation();

  // State
  const [ip, setIp] = useState(""); // user input
  const [searchIp, setSearchIp] = useState(""); // IP to fetch
  const [errorValidation, setErrorValidation] = useState(null);

  // Build fetch URL dynamically
  const fetchUrl = useMemo(() => {
    if (!key) return null; // Prevent fetch if API key missing
    return `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
      searchIp ? `&ipAddress=${searchIp}` : ""
    }`;
  }, [searchIp, key]);

  const { data, loading, error } = useFetch(fetchUrl);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValidation(null);

    const inputValue = ip.trim();
    const errors = validateIp(inputValue);

    if (errors) {
      setErrorValidation(errors);
      return; // stop if invalid
    }

    setSearchIp(inputValue);
    setIp("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="relative z-20 bg-[url('/src/assets/images/pattern-bg-desktop.png')] bg-cover bg-center min-h-[280px] pt-[30px] px-6 text-center">
        <h1 className="text-white text-3xl font-semibold">IP Address Tracker</h1>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex mx-auto max-w-[500px] shadow-2xl rounded-lg overflow-hidden mt-6"
        >
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Search for any IP address or domain"
            className="flex-1 py-[14px] px-[18px] text-[18px] border-none rounded-l-lg outline-none bg-white text-gray-800 h-[50px]"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-700 transition-colors w-[50px] h-[50px] flex items-center justify-center"
          >
            <img src={arrowIcon} alt="Search" className="w-4 h-[18px]" />
          </button>
        </form>

        {/* Validation Message */}
        {errorValidation && (
          <p className="mt-2 text-red-500">{errorValidation}</p>
        )}

        {/* Loading & API Error */}
        {loading && <p className="mt-2 text-gray-700">Loading...</p>}
        {error && (
          <p className="mt-2 text-red-500">
            {error.message || "Error fetching IP data."}
          </p>
        )}

        {/* Display IP Card */}
        {data && (
          <div className="absolute top-[172px] left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-[1100px]">
            <DisplayIpAddress data={data} />
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="relative flex-1 w-full mt-0">
        <div className="h-[65vh] w-full">
       <Map data={data} />
        </div>
      </div>
    </div>
  );
}

export default SearchIpAddress;