import { Route, Routes, Link } from "react-router-dom";
import ".//NavBar.css";
import logo from "../assets/ytlogoglittered.jpeg";

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
              {/* should render fresh viideos */}
            </li>
            <li className="active">
              <Link to={"/About"}>About</Link>
              {/* should  */}
            </li>
          </ul>
        </div>
        <div className="">
          <button className="button">
            <div className="button-container">
                <img al/>
              {/* <div className="top_left">top-left</div> */}
              {/* <div className="top_right">top-right</div> */}
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;