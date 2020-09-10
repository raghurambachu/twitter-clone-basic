import React from "react";

function Hashtag(props) {
  return (
    <a href="/">
      <div className="flex align-center">
        <div className="hashtag-ls">
          <p className="tweet-status">{props.componentContent.status}</p>
          <p className="hash">{props.componentContent.hashtag}</p>
          <p className="hashtag-content">{props.componentContent.content}</p>
          <p className="tweet-count">{props.componentContent.tweetCount}</p>
        </div>
        <div className="hashtag-rs">
          {props.componentContent.img && (
            <img src={props.componentContent.img} alt="" />
          )}
        </div>
      </div>
    </a>
  );
}

export default Hashtag;
