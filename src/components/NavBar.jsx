import { Route, Routes, Link } from "react-router-dom";
import "./NavBar.css"
import logo from "../assets/ytlogoglittered-removebg-preview.png";
import notificationIcon from "../assets/ytclone-icon-notification.png"
import AboutPage from "../components/AboutPage.jsx"

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <div id="logo-link">
          <Link to={"/"} className="site-title">
            {" "}
            <img src={logo} id="logo" width={70} /> YouTube{" "}
          </Link>
        </div>

        <div className="nav-links">
          {" "}
          <ul>
            <li className="active">
              <Link to={"/home"}>Home</Link>
              {/* should render fresh videos */}
            </li>
            <li className="active">
              <Link to={'/AboutPage'}> About </Link>
              {/* should  */}
            </li>

            <li className="active">
              <Link to={'/Videos'}> Videos </Link>
              {/* should possibly link to show page */}
            </li>
          </ul>
        </div>
        <div id="nav-end">
        <div className="button-container">
          <div className="render-button">
          <button className="button">
          
                <img src={notificationIcon} id="notification-icon" width={30} alt="black and white notification bell"/>
                {/* add a hover effect  */}
       
          </button>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
