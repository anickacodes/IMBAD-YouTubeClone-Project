import { Route, Routes, Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/ytlogoglittered-removebg-preview.png";


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
              <Link to={"/AboutPage"}> About </Link>
              {/* should  */}
            </li>

            <li className="active">
              <Link to={"/Videos"}> Videos </Link>
              {/* should possibly link to show page */}
            </li>
          </ul>
        </div>
      

        {/* <Header /> */}
    <div className="header" style={{display: "flex", alignItems:"center", justifyContent:"space-between"}}>
        
        <div className="voice-box">
          <div className="voice-search d-flex align-items-center">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon pointer"
              style={{ width: "20px", height: "20px" }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="create-options">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon pointer mxy-15"
            style={{ width: "20px", height: "20px" }}
          >
            <g class="style-scope yt-icon">
              <path
                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>

        <div className="youtube-apps">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon pointer mxy-15"
            style={{ width: "20px", height: "20px" }}
          >
            <g class="style-scope yt-icon">
              <path
                d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <div className="profile-menu">
          <div className="profile-img"></div>
        </div>
        
</div>
      </nav>
    </div>
  );
};

export default NavBar;
