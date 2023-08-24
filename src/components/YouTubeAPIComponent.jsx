
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar"

function YouTubeAPIComponent({handleSearch}) {
  const [videos, setVideos] = useState([]);
  const [videosToRender, setVideoToRender] = useState([]);

  useEffect(() => {
    const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
  
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=beyonce`
    // console.log("APIurl", API_URL)

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
  }, [setVideoToRender]);

  function handleSearch(searchQuery) {
    // console.log("searched", searchQuery)
    const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
    // console.log("search api", API_KEY)
    const maxResults = 8;
    const searchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      searchQuery
    )}&type=video&maxResults=${maxResults}&key=${API_KEY}`;
    console.log("searched url", searchURL)
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items)
        setVideoToRender(data.items);
        ; // Update the videos state
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>YouTube Videos</h1>
      <SearchBar onSearch={handleSearch} />
      {/* <VideosList
        videos={videosToRender.length > 0 ? videosToRender : videos}
      /> */}

      <ul>
      {videosToRender.length > 0 ? (
          videosToRender.map((video) => (
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
          ))
        ) : (
          <p>No search results found</p>
        )}
        {/* {videos.map((video) => (
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
        ))} */}
      </ul>
    </div>
  );
}

export default YouTubeAPIComponent;