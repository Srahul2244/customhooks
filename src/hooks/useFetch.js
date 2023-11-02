import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((r) => {
        setLoading(false);
        setData(r.data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { loading, error, data };
};

export default useFetch;
