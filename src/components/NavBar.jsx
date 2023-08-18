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
      </div>
    </div>

    // <label> YouTube
    // <input type="text" />
    // </label>
  );
};

export default NavBar;
