import React from "react";

function ShowVideos({ videos }) {
  console.log('Received videos:', videos);

  if (!videos || !Array.isArray(videos)) {
   
    return <p>No videos to display.</p>;
  }

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-detail">
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
      ))}
    </div>
  );
}

export default ShowVideos;
