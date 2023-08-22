import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
// import YouTubeAPIComponent from "./components/YouTubeAPIComponent";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <div>
        {" "}
        <h1>IMBAD </h1>
      </div>
      <Routes>
        <Route path="/home" element={<h1>Home - Welcome to IMBAD </h1>} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>

      <div className="card videos">
        <div>
          <h4>videos section</h4>
          {/* <YouTubeAPIComponent /> */}
        </div>
      </div>
    </>
  );
}

export default App;
