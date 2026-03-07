/**This component will receive IP data as props and display it. */

function DisplayIpAddress({ data }) {
  if (!data) {
    return;
  }

  return (
    <div className="bg-white p-[30px] rounded-[15px] shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0 text-center md:text-left">
      {/* <h2>IP Address Details</h2> */}

      <div className="md:px-6 md:border-r border-gray-200">
        {/* IP Address */}
        <p>
          <strong>IP</strong> {data.ip}
        </p>
      </div>

      <div className="md:px-6 md:border-r border-gray-200">
        {/* Location */}
        <p>
          <strong className="">Location:</strong> {data.location.city},{" "}
          {data.location.region}, {data.location.country}
        </p>
      </div>
      {/* Timezone */}
      <div className="md:px-6 md:border-r border-gray-200">
        <p>
          <strong>Timezone</strong> {data.location.timezone}
        </p>
      </div>
      {/* ISP */}
      <div className="md:px-6 md:border-r border-gray-200">
        <p>
          <strong>ISP</strong> {data.isp}
        </p>
      </div>
    </div>
  );
}
export default DisplayIpAddress;
