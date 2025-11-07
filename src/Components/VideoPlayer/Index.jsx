import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoPlayer = ({ youtubeUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getAutoplayUrl = (url) => {
    const baseUrl = url.includes("?")
      ? `${url}&autoplay=1&rel=0`
      : `${url}?autoplay=1&rel=0`;
    return baseUrl;
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-0 pb-[56.25%] bg-black overflow-hidden">
      {/* YouTube Embed */}
      {isPlaying && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={getAutoplayUrl(youtubeUrl)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}

      {/* Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-blue-600/30 bg-opacity-30 flex items-center justify-center transition-opacity duration-700">
          <button
            onClick={handlePlay}
            className="items-center text-white px-6 py-3 rounded-full text-3xl md:text-6xl lg:text-8xl font-semibold  hover:bg-blue-100 transition"
          >
            <FaRegCirclePlay />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
