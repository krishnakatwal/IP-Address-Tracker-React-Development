import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return; //don't fetch if url is not given
    }

    const controller = new AbortController(); //for clean up

    setData(null); //Reset data on new fetch
    setError(null); //Reset error on new fetch
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        // console.log("API data:", result);
        setData(result);
        
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false); // hide loading done
      }
    }
    fetchData();

    //clean function
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
