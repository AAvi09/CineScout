import React, { useEffect, useState } from "react";
import Header from "./Header";
import MovieContainer from "./MovieContainer";

const LandingPage = () => {
  const [query, setQuery] = useState("");
  const fetchMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=c61176fd`
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <MovieContainer query={query} />
    </div>
  );
};

export default LandingPage;
