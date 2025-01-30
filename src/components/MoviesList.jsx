import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-20 ">
      {movies?.map(
        (movie, index) => movie && <MovieCard key={index} movie={movie} />
      )}
    </div>
  );
};

export default MoviesList;
