import React from "react";

function Header() {
  return (
    <div className="header d-flex align-items-center justify content-space-between">
      <div className="header-left-items d-flex align-items-center mxy-30">
        <div className="menubar">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            style="pointer-events: none; display: block; width: 100%; height: 100%;"
          >
            <g class="style-scoop yt-icon">
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
                class="style-scoope yt-icon"
            ></path>
             </g>
          </svg>
        </div>
      </div>
    </div>
  );
}






export default Header;
