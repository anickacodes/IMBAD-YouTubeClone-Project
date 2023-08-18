import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import YouTubeAPIComponent from "./components/YouTubeAPIComponent";

function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?key=${
  //       import.meta.env.YOUTUBE_APP_API_KEY
  //     }/videos`
  //   ).then((r) => r.json().then(console.log));
  // }, []);

  return (
    <>
      <div></div>
      <h1>IMBAD </h1>
      <div className="card">
        <div>
          <YouTubeAPIComponent />
        </div>
      </div>
    </>
  );
}

export default App;

//hey
