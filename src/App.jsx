import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import { Route, Routes } from 'react-router-dom';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import SearchBar from './components/SearchBar';

function App() {
	return (
		<>
			{/* add to all pages */}
			<header>
				<NavBar />
			</header>
			<div>
				{' '}
				<h1>IMBAD</h1>
        {/* <SearchBar /> */}
			</div>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
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
