import "./App.css";
import AboutPage from "./components/AboutPage";
import { Route, Routes } from "react-router-dom";
import YouTubeAPIComponent from "./components/YouTubeAPIComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  function Videos() {
    const [videos, setVideos] = useState([]);
    const [videosToRender, setVideoToRender] = useState([]);

    return (
      <div className="card videos">
        <YouTubeAPIComponent
          videos={videos}
          setVideos={setVideos}
          setVideoToRender={setVideoToRender}
        />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Videos" element={<YouTubeAPIComponent />} />
      </Routes>

      <div className="card videos">
        <div>{/* <h4>Videos Section PlaceHolder</h4> */}</div>
      </div>
    </>
  );
}

export default App;
