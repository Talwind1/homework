import "./App.css";
import axios from "axios";
import react, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  const [query, setQuery] = useState("hooks");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const searchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        setData(data);
        setLoading(false);
      } catch (e) {
        throw e.messege;
      }
    };
    searchData();
  }, []);

  const onChange = (value) => {
    setQuery(value);
  };

  const search = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setData(data);
      setLoading(false);
    } catch (e) {
      throw e.messege;
    }
  };

  const displayData = () => {
    return data.hits.map((element) => {
      return (
        <li key={element.title}>
          <a href={element.url}>{element.title}</a>
        </li>
      );
    });
  };
  return (
    <div className="App">
      {loading && <h2>Loading...</h2>}
      {data && (
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => onChange(e.value)}
          />
          <button onClick={search}>Search</button>
          {displayData()}
        </div>
      )}
    </div>
  );
}

export default App;
