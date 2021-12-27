import "./App.css";
import axios from "axios";
import react, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState(null);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const searchCountry = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
      console.log(countries);
    };
    searchCountry();
  }, []);

  const showCountries = () => {
    return countries.map((element) => {
      return <li key={element.name}>{element.name}</li>;
    });
  };

  const updateTerm = (value) => {
    setTerm(value);

    const filterCountries = countries.filter((item) =>
      item.name.toLowerCase().startsWith(term.toLocaleLowerCase())
    );
    setCountries(filterCountries);
  };
  const filterDisplay = () => {};
  return (
    <div className="App">
      {countries && (
        <input
          type="text"
          onChange={(e) => updateTerm(e.target.value)}
          value={term}
        />
      )}
      {/* <button onClick={filterDisplay}>Click</button> */}
      {countries && <div> {showCountries()} </div>}
    </div>
  );
}

export default App;
