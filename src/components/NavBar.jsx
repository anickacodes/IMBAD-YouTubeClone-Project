import { Route, Routes, Link } from "react-router-dom";
import ".//NavBar.css";
import logo from "../assets/ytlogoglittered.jpeg";

const NavBar = () => {
  return (
    <>
      <div id="container" className="">
        <nav className="navbar navbar-light bg-light">
          <Link to={''} >
       
            <img src={logo} width={90} height={77} id="logo-icon" alt="" />
            {/* YouTube */}
            </Link>
          <Link to={"/"}>Home</Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
