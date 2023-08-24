import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import { Route, Routes } from 'react-router-dom';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import SearchBar from './components/SearchBar';
import Home from './components/Home';

function App() {
	return (
		<>
			{/* add to all pages */}
			<Home />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/AboutPage" element={ <AboutPage />} />
        <Route path="/Videos" element={ <YouTubeAPIComponent /> } />
      
      </Routes>
			<div className="card videos">
				<div>
					{/* <h4>Videos Section PlaceHolder</h4> */}
					{/* <YouTubeAPIComponent /> */}
				</div>
			</div>
		</>
	);
}

export default App;
