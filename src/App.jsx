import './App.css';
import AboutPage from './components/AboutPage';
import { Route, Routes } from 'react-router-dom';
import YouTubeAPIComponent from './components/YouTubeAPIComponent';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { useState } from 'react';


function App() {
	const [videos, setVideos] = useState([])
	const [videosToRender, setVideoToRender] = useState([]);

	function handleSearch(searchQuery) {
		
		const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
		
		const maxResults = 8;
		const searchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
		  searchQuery
		)}&type=video&maxResults=${maxResults}&key=${API_KEY}`;
	
		fetch(searchURL)
		  .then((response) => response.json())
		  .then((data) => {
			setVideos(data.items)
			setVideoToRender(data.items);
		
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  }



	return (
		<>
		<NavBar />
					{/* <SearchBar onSearch={handleSearch}/> */}

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Home" element={ <Home />} />
        <Route path="/AboutPage" element={ <AboutPage />} />
        <Route path="/Videos" element={ <div className="card videos"> <YouTubeAPIComponent videos={videos} setVideos={setVideos} setVideoToRender={setVideoToRender}/> </div>} />
      
      </Routes>
			<div className="card videos">
				<div>
					{/* <h4>Videos Section PlaceHolder</h4> */}
					<SearchBar onSearch={handleSearch}/>

				</div>
			</div>
		</>
	);
}

export default App;
