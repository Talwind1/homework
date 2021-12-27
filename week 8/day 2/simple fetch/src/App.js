import "./App.css";
import axios from "axios";
import react, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const searchMovie = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1");
      setMovies(data);
      console.log(data);
    };
    searchMovie();
  }, []);

  return (
    <div className="App">
      {{ movies } && (
        <div>
          <h1>{movies.title}</h1>
          <h2>By: {movies.director}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
