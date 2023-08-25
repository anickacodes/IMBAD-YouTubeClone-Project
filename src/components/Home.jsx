import React, { useState } from 'react';
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
      {searchQuery ? <SearchList videos={videos} /> : null}
      {!searchQuery && <p className="search-prompt">Your Search Will Be Shown Below.</p>}
    </>
  );
}

export default Home;
