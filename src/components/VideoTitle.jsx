import React from "react";

const VideoTitle = ({ Title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{Title}</h1>
      <p className="px-2 py-6 text-md w-1/4 ">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-gray-100  text-xl  text-black font-semibold px-12 py-3 rounded-md hover:bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-500  text-xl  text-white px-10 py-3 rounded-md hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
