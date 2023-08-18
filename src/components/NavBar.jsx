import { Route, Routes, Link } from "react-router-dom";
import ".//NavBar.css";

const NavBar = () => {
  return (
    <div id="container" className="style-scope ytd-masthead">
      <div id="start" className="style-scope ytd-masthead">
        <yt-icon-button id="back-button" className="style-scope ytd-masthead">
          <button
            id="button"
            className="style-scope ytd-masthead"
            aria-label="Back"
          >
            <yt-interaction
              id="interaction"
              className="circular style-scope yt-icon-button"
            >
              <div className="stroke style-scope yt-interaction"></div>
              <div className="fill style-scope yt-interaction"></div>
            </yt-interaction>
          </button>
        </yt-icon-button>

        <tp-yt-paper-tooltip
          id="back-button-tooltip"
          htmlFor="back-button"
          className="style-scope ytd-masthead"
          disable-upgrade
        >
          {" "}
          Back{" "}
        </tp-yt-paper-tooltip>

        <yt-icon-button
          id="guide-button"
          toggeable="true"
          className="style-scope ytd-masthead"
        >
          <button
            id="button"
            className="style-scope yt-icon-button"
            aria-label="Guide"
            aria-pressed="false"
          >
            <yt-icon
              id="guide-icon"
              icon="yt-icons:menu"
              className="style-scope ytd-masthead"
            >
              <yt-icon-shape className="style-scope yt-icon">
                <icon-shape className="yt-spec-icon-shape">
                  <div className="svg-holder-icon">
                    <svg
                      height={24}
                      viewBox="0 0 24 24"
                      width={24}
                      focusable="false"
                    >
                      <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                    </svg>
                  </div>
                </icon-shape>
              </yt-icon-shape>
            </yt-icon>
          </button>
          <yt-interaction id="interaction" className="circular style-scope yt-icon-button">
            <div className="stroke style-scope yyt-interaction"></div>
            <div className="fill style-scope yyt-interaction"></div>
          </yt-interaction>

        </yt-icon-button>

        {/* add another ytd-topbar-logo-renderer */}
        <ytd-topbar-logo-renderer id="logo" className="style-scope ytd-masthead">
<a className="yt-simple-endpoint style-scope ytd-topbar-logo-renderer" id="logo" aria-label href="/" title="YouTube Home">

</a>
<div className="style-scope ytd-topbar-logo-renderer">
    <ytd-logo className="style-scope ytd-topbar-logo-renderer">
        <yt-icon id="logo-icon" className="style-scope ytd-logo">
            <yt-icon-shape className="style-scope yt-icon">
                <icon-shape className="yt-spec-icon-shape">
                    <div className="iconShape-div-in-nav">
                        <svg className="external-icon" viewBox="0 0 90 20" focusable="false">
<svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
        <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
    </g>
</svg>

                        </svg>
                    </div>
                </icon-shape>
            </yt-icon-shape>
        </yt-icon>
    </ytd-logo>
</div>





<span id="country-code" className="style-scope ytd-topbar-logo-renderer"></span>
        </ytd-topbar-logo-renderer>
      </div>
    </div>

    // <label> YouTube
    // <input type="text" />
    // </label>
  );
};

export default NavBar;
