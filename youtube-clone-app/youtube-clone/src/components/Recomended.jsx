import { useEffect, useState } from "react"
import { API_KEY, value_convertor } from "../data"
import { Link } from "react-router-dom";
const Recomended = ({categoryId}) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async() => {
      // const realtedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
      // await fetch(realtedVideoUrl).then(res=>res.json()).then(data=>setApiData(data.items))
    if (!categoryId) return; // ✅ Don’t call API if categoryId is missing

    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    try {
      const res = await fetch(relatedVideoUrl);
      const data = await res.json();
      setApiData(data.items || []); // ✅ Avoid crash if data.items is undefined
    } catch (error) {
      console.error("Error fetching recommended videos:", error);
    }
    }
  useEffect(()=> {
    fetchData();
  },[])
  return (
    <div className="recomended">
{apiData.map((item,index)=>{
  return(
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
        {/* <img src={item.snippet.thumbnails.medium.url} alt="" /> */}
        {item.snippet?.thumbnails?.medium?.url && (
  <img src={item.snippet.thumbnails.medium.url} alt="" />
)}

        <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_convertor(item.statistics.viewCount)} views</p>
        </div>
      </Link>
  )
})}   
    
    </div>
  )
}

export default Recomended;




