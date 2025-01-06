import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";
import { getMovieDetails, options } from "../../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailerData = async () => {
    const data = await fetch(
      `${getMovieDetails}${movieId}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailerData();
  }, []);
};

export default useMovieTrailer;
