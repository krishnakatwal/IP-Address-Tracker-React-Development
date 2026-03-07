import { useState } from "react";

// Custom hook
function useIpValidation() {
  // State to store the validation error message
  const [error, setError] = useState("");

  // Function that validates IP address provided
  const validateIp = (value) => {
    // Regular expression pattern to validate IPv4 addresses
    // Example valid format: 192.168.1.1
    const ipRegex =
      /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

    // Remove any extra whitespace from the input value
    const inputValue = value.trim();

    // Check if the input field is empty
    if (!inputValue) {
      setError("Please enter an IP address");

      return false;
    }

    // Check if the input does not match the IP address pattern
    if (!ipRegex.test(inputValue)) {
      // Set an error message if the IP format is invalid
      setError("Please enter a valid IP address (e.g. 192.168.1.1)");

      //
      return false;
    }

    // Clear the error message if the IP is valid
    setError("");

    return true;
  };

  // Return the error state and validation function

  return { error, validateIp };
}

export default useIpValidation;
