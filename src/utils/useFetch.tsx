import { useState, useEffect } from "react";

export const useFetch: any = (url: string, post_data = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, post_data);
      const data = await response.json();
      setData(data);
    };
    fetchData();
    setLoading(false);
  }, []);
  return { data, loading };
};
