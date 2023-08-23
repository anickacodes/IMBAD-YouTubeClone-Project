
import React, { useState, useEffect } from "react";


function YouTubeAPIComponent() {
  const [videos, setVideos] = useState([]);
  // const [videosToRender, setVideoToRender] = useState([]);

  useEffect(() => {
    const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=beyonce`

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} - ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data from YouTube API:", error);
      });
  }, []);

  // function handleSearch(searchQuery) {
  //   console.log(searchQuery)
  //   const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
  //   const searchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
  //     searchQuery
  //   )}&type=video&maxResults=8&key=${API_KEY}`;
  //   fetch(searchURL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVideos(data.items)
  //       setVideoToRender(data.items);
  //       ; // Update the videos state
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <div>
      <h1>YouTube Videos</h1>
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* <VideosList
        videos={videosToRender.length > 0 ? videosToRender : videos}
      /> */}

      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img
              src={
                video.snippet.thumbnails.default.url || "fallback-image-url.jpg"
              }
              alt="Thumbnail"
            />
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