import React, { useEffect, useState } from "react";
import Header from "./Header";
import MovieContainer from "./MovieContainer";
const KEY = "c61176fd";
const LandingPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState();
  const fetchMovies = async (query) => {
    setQuery("batman");

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
    );
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    if (data.Response === "False")
      throw new Error(`no movies found for query ${query}`);
    setMovies(data.Search);
    console.log(data);
  };
  useEffect(() => {
    fetchMovies(query);
  }, [query]);
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <MovieContainer query={query} movies={movies} />
    </div>
  );
};

export default LandingPage;
