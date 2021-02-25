import { useEffect, useState } from "react";

const useFetch = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrying, setIsRetrying] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await asyncFunction();
        setData(data);
        setIsLoading(false);
        return;
      } catch (err) {
        setIsRetrying(true);
        const timeout = setTimeout(async () => {
          try {
            const data = await asyncFunction();
            setData(data);
          } catch (err) {
            setError("Cannot fetch the item.");
          }
        }, 2000);
        setIsLoading(false);
        setIsRetrying(false);
        return () => clearTimeout(timeout);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, isRetrying, error };
};

export default useFetch;
