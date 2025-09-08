// import Newscard from "./Newscard";
// const Newslist = ({articles}) => {
//   return (
//     <div className="container">
//         <div className="row">
//             {articles.map((cat,index)=>{
//                  <div key={index} className="col-md-4">
//                      <Newscard/>  
//             </div>

//             })}
           
//         </div>
//     </div>
      

//   )
// }

// export default Newslist;
import Newscard from "./Newscard";

const Newslist = ({ articles }) => {
  return (
    <div className="container">
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <Newscard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newslist; // ✅ This is required
