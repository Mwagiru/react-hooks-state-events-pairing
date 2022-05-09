import React, { useState } from "react";
import video from "../data/video.js";

function Likes(){
    const [likes,setLikes] = useState(video.upvotes);
function upvote(){
        setLikes(likes +1);
    }
    const [like,setLike] = useState(video.downvotes);
    function downvote(){
        setLike(like +1);
    }
    return (
      <>
        <button onClick={upvote}>{likes}👍</button>
        <button onClick={downvote}>{like}👎</button>
      </>
    );
}
export default Likes;
