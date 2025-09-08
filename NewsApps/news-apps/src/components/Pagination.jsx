// const Pagination = ({pages,setPages}) => {
//   return (
//     <div className="d-flex justify-content-center my-4">
//       <button className="btn btn-secondary me-2"disabled={pages<=1} onClick={()=>setPages(pages - 1)} >Previous</button>
//       <button className="btn btn-secondary me-2" onClick={()=>setPages(pages + 1)}>Next</button>
//     </div>
//   )
// }

// export default Pagination;
const Pagination = ({pages,setPages}) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <button className="btn btn-secondary me-2" disabled={pages<=1} onClick={()=>setPages(pages - 1)} >Previous</button>
      <button className="btn btn-secondary me-2" onClick={()=>setPages(pages + 1)}>Next</button>
    </div>
  )
}

export default Pagination; 
