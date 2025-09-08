import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import CategoryTab from './components/CategoryTab';
import Newslist from './components/Newslist';
import Spinner from './components/Spinner';
import Pagination from './components/Pagination';
import { useEffect, useState } from 'react';
import { API_KEY } from './data';

function App() {
const [articles, setArticles] = useState([]);
const [pages, setPages] = useState(1);
const [category, setCategories] = useState("general");
const [query, setQuery] = useState("");
const [loading, setLoading] = useState(false);
const fetchData = async()=> {
  setLoading(true);
  let url ="";
  if(query){
   url = `https://newsapi.org/v2/everything?q=${query}&page=${pages}&pageSize=9&apiKey=${API_KEY}`;
  }
  else{
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${pages}&pageSize=9&apiKey=${API_KEY}`;
      const respone = await fetch(url);
      const data = await respone.json();
      setArticles(data.articles || []);
      setLoading(false);
  }

}
useEffect(()=>{
  fetchData();
},[category,pages,query])

  return (
    <div>
      <Navbar setQuery={setQuery}/>
      <CategoryTab setCategories={setCategories}/>
      {loading?<Spinner/>:<Newslist articles={articles}/>}
      <Pagination pages={pages} setPages={setPages}/>

    </div>
  )
}

export default App;
