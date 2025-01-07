import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addupComingMovies } from "../../utils/movieSlice";
import { UpComingMoviesMovies_API, options } from "../../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getuseUpComingMovies = async () => {
    const data = await fetch(UpComingMoviesMovies_API, options);
    const json = await data.json();
    dispatch(addupComingMovies(json.results));
  };

  useEffect(() => {
    getuseUpComingMovies();
  }, []);
};

export default useUpComingMovies;
