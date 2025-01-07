import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      {movies?.nowPlayingMovies && (
        <div className="bg-black">
          <div className="-mt-72 pl-2 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList
              title={"Upcoming Movies"}
              movies={movies.upComingMovies}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
