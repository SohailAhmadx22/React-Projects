import { useState } from "react";
import Feed from "../../components/Feed";
import Sidebar from "../../components/Sidebar"
import './Home.css'
const Home = ({navbar}) => {
  const [category, setCategory] = useState(0);
  return (
    <div>
      <Sidebar navbar={navbar} category={category} setCategory={setCategory}/>
     <div className={`container ${navbar ? "" : "large-container"}`}>

        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home;
