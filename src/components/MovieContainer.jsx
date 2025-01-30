import React from "react";
import MoviesList from "./MoviesList";

const MovieContainer = ({ query }) => {
  return (
    <div className="bg-black h-screen w-screen">
      {query && <h1 className="text-4xl text-white">{query}</h1>}
      <MoviesList />
    </div>
  );
};

export default MovieContainer;
