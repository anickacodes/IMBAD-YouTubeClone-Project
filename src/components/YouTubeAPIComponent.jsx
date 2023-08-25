import { useState, useEffect } from 'react';

function YouTubeAPIComponent({ searchQuery }) {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
				const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchQuery}&maxResults=8`;

				const response = await fetch(API_URL);
				if (!response.ok) {
					throw new Error(
						`HTTP Error: ${response.status} - ${response.statusText}`
					);
				}

				const data = await response.json();
				setVideos(data.items);
			} catch (error) {
				console.error('Error fetching data from YouTube API:', error);
			}
		};

		if (searchQuery) {
			fetchVideos();
		} else {
			setVideos([]);
		}
	}, [searchQuery]);

	return videos;
}

export default YouTubeAPIComponent;
