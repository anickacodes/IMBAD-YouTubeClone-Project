import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import YouTubeAPIComponent from './YouTubeAPIComponent';

function Home() {
	const [searchQuery, setSearchQuery] = useState('');
	const videos = YouTubeAPIComponent({ searchQuery });

	const handleSearch = (searchQuery) => {
		setSearchQuery(searchQuery);
	};

	return (
		<>
			<header>
				<NavBar />
			</header>
			<SearchBar onSearch={handleSearch} />
			{searchQuery ? (
				<SearchList videos={videos} searchQuery={searchQuery} />
			) : (
				<p className="prompt">Your Search Will Appear Below.</p>
			)}
			<div></div>
		</>
	);
}

export default Home;
