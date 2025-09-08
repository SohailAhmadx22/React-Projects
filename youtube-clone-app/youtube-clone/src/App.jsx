import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Video from "./Pages/Video/Video";


const App = () => {
  const [navbar, setNavbar] = useState(true);
  return<div>
<Navbar setNavbar={setNavbar} />
  <Routes>
    <Route path="/" element={<Home navbar={navbar}/>}/>
    { <Route path="/video/:categoryId/:videoId" element={<Video/>}/> }
  </Routes>
  </div>

}

export default App;
