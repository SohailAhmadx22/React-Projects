import video1 from "../../src/assets/video.mp4"
import  like from "../assets/like.png";
import  dislike from "../assets/dislike.png";
import  share from "../assets/share.png";
import  save from "../assets/save.png";
import  sohail from "../assets/sohail.png";
import  user_profile from "../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_convertor } from "../data";
import moment from "moment";
import { data, useParams } from "react-router-dom";
const PlayVideo = () => {
  const {videoId} = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setcommentData] = useState([]);
  const fetchVideoData = async() => {
    const videoDeatils_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(videoDeatils_url);
    const data = await response.json();
    console.log("Video data:", data);
    setApiData(data.items[0]);
  }
  const fetchOtherData = async() => {
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelDataUrl).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

    // fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
      await fetch(comment_url).then(res=> res.json()).then(data=>setcommentData(data.items));
  }
useEffect(()=> {
  fetchVideoData();
},[videoId])
useEffect(()=> {
  fetchOtherData();
},[apiData])

  return (
  <div className="play-video">
<iframe
  src={`https://www.youtube.com/embed/RYI-WG_HFV8?autoplay=1`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  title="YouTube Video"
  className="absolute top-0 left-0 w-full h-full"
/>


  <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
  <div className="play-video-info">
    <p>{apiData?value_convertor(apiData.statistics.viewCount):"160k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"" }</p>
  <div> 
  <span><img src={like} alt="" />{apiData?value_convertor(apiData.statistics.likeCount):15500}</span>
  <span><img src={dislike} alt="" /></span>
  <span><img src={share} alt="" /> Share</span>
  <span><img src={save} alt="" /> Share</span>
    </div>
    </div>
    <hr/>
    <div className="publisher">
      <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
      <div>
        <p>{apiData?apiData.snippet.channelTitle:""}</p>
        <span>{channelData?value_convertor(channelData.statistics.subscriberCount):"100k"} Subscribers</span>
      </div>
      <button>Subcribe</button>
    </div>
    <div className="video-discription">
      <p>{apiData?apiData.snippet.description.slice(0,240):"Description"}</p>
      <hr />
      <h4>{apiData?value_convertor(apiData.statistics.commentCount):109} Comments</h4>
      {commentData.map((item,index)=>{
        return(
  <div key={index} className="comments">
        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
        <div>
          <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>55 days ago</span></h3>
          <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>{value_convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
            <img src={dislike} alt="" />
            <span>0</span>
          </div>
        </div>
      </div>
        )
      })}
       
     
    </div>
      </div>
  )
}

export default PlayVideo;
