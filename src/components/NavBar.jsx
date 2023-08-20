import { Route, Routes, Link } from "react-router-dom";
import ".//NavBar.css";
import logo from "../assets/ytlogoglittered.jpeg";

const NavBar = () => {
  return (
    <div className="container" >
    <nav >
      <Link to={"/"} className="site-title"> <img src={logo} id="logo" width={70}/> YouTube </Link>
      <ul>
     
        <li className="active">
            <Link to={'/home'}>Home</Link>
        </li>
        <li className="active">
            <Link to={'/About'}>About</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
