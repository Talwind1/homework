// import logo from "./logo.svg";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    fetch = async () => {
      const { data } = await axios.get(
        "http://localhost:3001/weather?address=boston"
      );
      console.log(data);
    };
    fetch();
  }, []);
  return <div className="App"></div>;
}

export default App;
