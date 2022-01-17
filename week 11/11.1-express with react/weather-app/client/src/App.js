// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/weather?address=boston"
        );
        console.log(data);
        setData(data);
      } catch (e) {
        throw Error(e.message);
      }
    };
    fetch();
  }, []);
  return (
    <div className="App">
      <h1>{data.forecast}</h1>
    </div>
  );
}

export default App;
