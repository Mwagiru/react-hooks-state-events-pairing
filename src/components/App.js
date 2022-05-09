import video from "../data/video.js";
import React from "react";
import Comments from "./Comments.js";
import Likes from "./Likes.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <span>{video.views} Views | </span><span>Uploaded {video.createdAt}</span>
      <br/> <br/>
      <Likes />
      <div>
        <br/>
        <Comments />
      </div>
    </div>
  );
}

export default App;
