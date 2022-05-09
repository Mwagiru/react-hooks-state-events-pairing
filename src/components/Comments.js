import React,{useState} from "react";
import video from "../data/video";

function Comments(){
    const [comments, setComments]=useState(true);
    function handleComments(){
        setComments(!comments)
    }
    let commentDisplay=video.comments.map((comment)=>(
        <div className= {comments ? "block":"none"}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        </div>
    ))
    return (
      <>
        <button onClick={handleComments}>{comments ? "Hide Comments" :"Show Comments" }</button>
        <hr/>
        {commentDisplay}
      </>
    );
}
export default Comments;
