import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import YouTubeAPIComponent from "./YouTubeAPIComponent";
import ShowVideos from "./ShowVideos";

function Home({  setVideos }) {

  const [searchQuery, setSearchQuery] = useState("");

  const videos = YouTubeAPIComponent({ searchQuery });

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    // setVideos(()=> YouTubeAPIComponent({ searchQuery }));
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {searchQuery ? (
        <SearchList videos={videos} searchQuery={searchQuery} />
      ) : (
        <p className="prompt">Your Search Will Appear Below.</p>
      )}
      <div> </div>
    </>
  );
}

export default Home;
