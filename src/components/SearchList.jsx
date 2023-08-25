import React from 'react';
import { Link } from 'react-router-dom';

function SearchList({ videos, searchQuery }) {

  return (
    <div className="video-list">
      {searchQuery ? (
        videos.map((video) => (

          <div className="video-card" key={video.id.videoId}>
            <Link to={`/videos/${video.id.videoId}`}>
              <div>
                <img
                  className="listCard"
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
                <br />
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p className="results">Search Results</p>
      )}
    </div>
  );
}

export default SearchList;
