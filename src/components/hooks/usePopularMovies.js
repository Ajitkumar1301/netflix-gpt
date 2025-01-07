import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/movieSlice";
import { PopularMovies_API, options } from "../../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(PopularMovies_API, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
