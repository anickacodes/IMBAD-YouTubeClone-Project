import React, { useState, useEffect } from 'react';

function YouTubeAPIComponent() {
	const [videos, setVideos] = useState([]);

	// useEffect(() => {
	// 	const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
	// 	// console.log('API_KEY:', API_KEY);

	// 	const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=beyonce`;
	// 	// console.log('API_URL:', API_URL);

	// 	fetch(API_URL)
	// 		.then((response) => {
	// 			if (!response.ok) {
	// 				throw new Error(
	// 					`HTTP error! Status: ${response.status} - ${response.statusText}`
	// 				);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setVideos(data.items);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error fetching data from YouTube API:', error);
	// 		});
	// }, []);

	return (
		<div>
			<h1>YouTube Videos</h1>
			<ul>
				{videos.map((video) => (
					<li key={video.id.videoId}>
						<a
							href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{video.snippet.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default YouTubeAPIComponent;
