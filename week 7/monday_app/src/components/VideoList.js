import react from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video, key) => {
    return <VideoItem />;
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
