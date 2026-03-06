/**This component will receive IP data as props and display it. */

function DisplayIpAddress({ data }) {
  if (!data) {
    return ;
  }

  return (
    <div className="border p-4 rounded-md bg-gray-50">
      <h2>IP Address Details</h2>

      <p>
        <strong>IP:</strong> {data.ip}
      </p>

      <p>
        <strong>Location:</strong> {data.location.city}, {data.location.region},{" "}
        {data.location.country}
      </p>

      <p>
        <strong>Timezone:</strong> {data.location.timezone}
      </p>

      <p>
        <strong>ISP:</strong> {data.isp}
      </p>
    </div>
  );
}
export default DisplayIpAddress;
