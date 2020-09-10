import React from "react";

function Follow(props) {
  return (
    <a href="/">
      <div className="flex align-center space-between">
        <div className="follow-ls">
          {props.componentContent.avatar && (
            <img
              src={props.componentContent.avatar}
              alt={props.componentContent.name}
            />
          )}
        </div>
        <div className="follow-center">
          <p className="name">{props.componentContent.name}</p>
          <p className="username">@{props.componentContent.userName}</p>
        </div>
        <div className="follow-rs">
          <a
            href={
              "https://twitter.com/" + props.componentContent.userName || "/"
            }
            className="btn btn-follow"
          >
            Follow
          </a>
        </div>
      </div>
    </a>
  );
}

export default Follow;
