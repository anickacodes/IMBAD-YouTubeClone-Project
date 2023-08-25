import React from 'react';

function ShowVideos({ video }) {
  return (
    <div className="video-detail">
      <iframe
        title={video.snippet.title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default ShowVideos;