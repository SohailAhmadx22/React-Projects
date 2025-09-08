const Newscard = ({article}) => {
  return (
    <div>
      <div className="card h-100">
        <img src={article.urlToImage} alt="" className="card-img-top" />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description || "No Description"}</p>
            <a href="" className="btn btn-primary mt-auto">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Newscard;
