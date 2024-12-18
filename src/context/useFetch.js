import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.statusText}`);
        }

        const result = await res.json();

        setLoading(false);
        setData(result.products || result);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('The fetch was aborted');
        } else {
          setError('Could not fetch the data');
        }
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
