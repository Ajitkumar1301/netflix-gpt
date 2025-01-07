import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-4 py-2">
      <img src={IMG_CDN_URL + posterPath} alt="Image Poster" />
    </div>
  );
};

export default MovieCard;
