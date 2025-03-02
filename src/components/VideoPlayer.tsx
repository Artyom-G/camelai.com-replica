import React from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="relative w-full h-full max-w-[980px] overflow-hidden video-container">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover rounded-[14px]"
      >
        Your browser does not support the video tag.
      </video>
      <a
        href="#"
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[100] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <Image
          src="https://camelai.com/assets/images/play-icon-2.png"
          alt="play button"
          width={130}
          height={130}
          className="transition-all ease-in-out duration-500 relative filter drop-shadow-lg z-50"
        />
      </a>
    </div>
  );
};

export default VideoPlayer;
