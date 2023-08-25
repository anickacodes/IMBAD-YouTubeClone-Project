import './App.css';
import React from 'react';
import AboutPage from './components/AboutPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import NavBar from './components/NavBar';
import ShowVideos from './components/ShowVideos';

function App() {

	return (
		<Router>
			    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/videos/:videoId" element={<ShowVideos />} /> 
      </Routes>
    </Router>
	);
}

export default App;