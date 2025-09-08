import { useState } from "react";
import PlayVideo from "../../components/PlayVideo";
import Recomended from "../../components/Recomended";
import { useParams } from "react-router-dom";

const Video = () => {
  const {videoId, categoryId} = useParams(null);
  return (
    <div className="play-container">
        <PlayVideo videoId={videoId}/>
        <Recomended categoryId={categoryId}/>
      
    </div>
  )
}

export default Video;
