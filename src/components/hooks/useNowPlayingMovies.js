import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { NowPlayingMovie_API, options } from "../../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NowPlayingMovie_API, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
