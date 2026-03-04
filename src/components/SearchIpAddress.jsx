import arrowIcon from "../assets/images/icon-arrow.svg";
function SearchIpAddress() {
  return (
    <div>
      <label htmlFor="ip-input">Search IP Address</label>

      <input
        type="text"
        id="ip-input"
        placeholder="Search for any IP address or domain"
        className="border border-blue-300 rounded-md p-2"
      />

      <button className="bg-red-500" type="submit" id="search-btn">
        <img src={arrowIcon} alt="Search" className="w-4 h-4" />
      </button>
    </div>
  );
}
export default SearchIpAdd;
