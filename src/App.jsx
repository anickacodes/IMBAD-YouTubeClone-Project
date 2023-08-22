import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import YouTubeAPIComponent from "./components/YouTubeAPIComponent";

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
			</div>

			<div className="card videos">
				<div>
					<h4>Videos Section</h4>
					{/* <YouTubeAPIComponent /> */}
				</div>
			</div>
		</>
	);
}

export default App;
