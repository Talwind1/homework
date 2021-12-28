import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);
  const cancelTokenSource = axios.CancelToken.source();
  useEffect(() => {
    fetch = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all", {
        cancelToken: cancelTokenSource.token,
      });
      console.log(data);
      console.log(cancelTokenSource);
      setData(data);
    };
    fetch();
    return () => {
      cancelTokenSource.cancel();
    };
  }, []);

  return <div>{data && data[0].name}</div>;
};

export default Fetch;
