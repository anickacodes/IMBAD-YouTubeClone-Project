import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

function ShowVideos({ videos }) {
  console.log("Received videos:", videos);

  let { videoId } = useParams();

  console.log("id videos:", videoId);

  if (!videos || !Array.isArray(videos)) {
    return <p>No videos to display.</p>;
  }

  return (
    <div>
         <iframe
            title={'video.snippet.title'}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowfullscreen
          ></iframe>

      {/* {videos.map((video) => (
        <div key={video.id.videoId} className="video-detail">

       


          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
        </div>
      ))} */}
    </div>
  );
}

export default ShowVideos;


// Possible Approaches to getting individual video object 

//onclick - in app (maybe) - a function from app connects to useNav to pass the object into the video show page 

// otherwise, array of searchQuery gets FIND/found by id 

// can api send a query for 1 specidfic video -- endpoint accessing by ID 