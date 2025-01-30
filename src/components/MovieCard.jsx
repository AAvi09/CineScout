import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-44 h-80 shadow-lg shadow-blue-950 bg-white text-xl text-black border-2 border-emerald-950 rounded-2xl m-4 p-4  ">
      <div className="flex flex-col items-center justify-center">
        <img
          src={movie.Poster}
          alt={`${movie} poster`}
          className="w-44 h-52 bg-amber-100"
        />
        <h1 className="text-xl text-black ">{movie.Title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
