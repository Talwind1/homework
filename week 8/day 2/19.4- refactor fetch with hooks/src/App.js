import "./App.css";
import axios from "axios";
import react, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [categoryJoke, setCategoryJoke] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/categories`
        );
        setCategories(data);
        console.log(categories);
        setLoading(false);
      } catch (e) {
        throw e.messege;
      }
    };
    generateCategories();
  }, []);

  const searchCategory = async (category) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      setCategoryJoke(data.value);
      console.log(categoryJoke);
      setLoading(false);
    } catch (e) {
      throw e.messege;
    }
  };
  const randomJoke = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random`
      );
      setData(data);

      setLoading(false);
    } catch (e) {
      throw e.messege;
    }
  };

  return (
    <div className="App">
      <button onClick={randomJoke}>Make me laugh</button>
      {loading && <h2>Loading...</h2>}
      {data && <h3>{data.value}</h3>}
      {categories && (
        <div>
          {categories.map((category) => {
            return (
              <button onClick={() => searchCategory(category)}>
                {category}
              </button>
            );
          })}
          <h2>{categoryJoke}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
