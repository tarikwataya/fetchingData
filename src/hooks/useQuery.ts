import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export function useQuery<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isQuery, setIsQuery] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsQuery(false);
      });
  }, []);

  return { data, error, isQuery };
}
