import './App.css';
import React, { useState } from 'react';
import AboutPage from './components/AboutPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import NavBar from './components/NavBar';
import ShowVideos from './components/ShowVideos';

function App() {
	const [videos, setVideos] = useState([]);
console.log(videos)

// function handleAppVideoSearch(){
// 	const setVideos() = YouTubeAPIComponent({ searchQuery });

// }

	return (
		<Router>
			    <NavBar />
      <Routes>
        <Route path="/" element={<Home setVideos={setVideos}/>} />  
        <Route path="/AboutPage" element={<AboutPage />} />
        {/* <Route path="/Videos" element={<ShowVideos  />} />  */}
        <Route path="/videos/:videoId" element={<ShowVideos videos={videos} />} /> 
      </Routes>
    </Router>
	);
}

export default App;