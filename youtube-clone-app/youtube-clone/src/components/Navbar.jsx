import  toggleIcon from "../assets/menu.png";
import  logo from "../assets/logo.png";
import  search from "../assets/search.png";
import  upload from "../assets/upload.png";
import  more from "../assets/more.png";
import  belicon from "../assets/notification.png";
import  jack from "../assets/jack.png";
import { Link } from "react-router-dom";
const Navbar = ({setNavbar}) => {
  return (
    <div>
   <nav className="navbar-main flex-div">
        <div className="navbar-left flex-div">
              <img
          onClick={() => setNavbar(prev => !prev)}  // ✅ simplified toggle
          src={toggleIcon}
          className="toggleIcon"
          alt="menu"
        />
            <Link to='/'><img  src={logo} className="logo" /></Link>
          
        </div>
        <div className="navbar-middle flex-div">
          <div className="search-box flex-div">
            <input type="text"  placeholder="Search"/>
            <img src={search} alt="" />
          </div>
           </div>
          <div className="navbar-right flex-div">
             <img className="upload" src={upload} alt="" />
             <img className="more" src={more} alt="" />
             <img className="belicon" src={belicon} alt="" />
             <img className="jack" src={jack} alt="" />
          </div>
       

   </nav>
   </div>
  )
}

export default Navbar;
