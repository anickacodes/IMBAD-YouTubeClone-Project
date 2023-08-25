import './App.css';
import React from 'react';
import AboutPage from './components/AboutPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {

	return (
		<Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </Router>
	);
}

export default App;