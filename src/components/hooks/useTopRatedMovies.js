import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/movieSlice";
import { TopRatedMovies_API, options } from "../../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TopRatedMovies_API, options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
