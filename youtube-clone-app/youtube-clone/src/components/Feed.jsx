import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"
import { API_KEY } from "../data"
const Feed = ({category}) => {
    const [data, setData] = useState([]);
const fetchData = async () => {
  let videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`;

  // ✅ Only add category if not "Home"
if (category !== undefined && category !== 0){
    videoList_url += `&videoCategoryId=${category}`;
  }

  const response = await fetch(videoList_url);
  const data = await response.json();
  setData(data.items);
};

 
    useEffect(()=>{
        fetchData();
    }, [category])
  return (
    <div className={`feed-container ${Sidebar?"with-sidebar":"full-width"}`}>
{data && data.length > 0 ? (
  data.map((item, index) => (
    <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id}`} className="card">
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      <p>{item.statistics?.viewCount} views</p>
    </Link>
  ))
) : (
  <p>No videos found.</p>
)}
    </div>
  )
}

export default Feed;
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { API_KEY } from "../data";

// const Feed = ({ category }) => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
//     const response = await fetch(videoList_url);
//     const data = await response.json();
//     setData(data.items);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed-container">
//       {data.map((item, index) => {
//         return (
//           <Link
//             key={index}
//             to={`/video/${item.snippet.categoryId}/${item.id}`}
//             className="card"
//           >
//             <img src={item.snippet.thumbnails.medium.url} alt="video thumbnail" />
//             <h2>{item.snippet.title}</h2>
//             <h3>{item.snippet.channelTitle}</h3>
//             <p>{item.statistics.viewCount} views &bull; {new Date(item.snippet.publishedAt).toDateString()}</p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Feed;
