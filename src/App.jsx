import './App.css';
import React from 'react';
import AboutPage from './components/AboutPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import NavBar from './components/NavBar';
import SearchList from './components/SearchList';

function App() {

	return (
		<Router>
			    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/AboutPage" element={<AboutPage />} />
        {/* <Route path="/VideoPage" element={<SearchList />} /> trying to render videos */}
      </Routes>
    </Router>
	);
}

export default App;