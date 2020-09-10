import React from "react";

function Tweet(props) {
  return (
    <article className="tweet">
      <div className="tweet-header flex">
        <img
          className="avatar"
          src={props.tweet.avatar}
          alt={props.tweet.username}
        />
        <div className="tweet-hc">
          <a
            className="name-link"
            href={"https://twitter.com/" + props.tweet.username}
          >
            <span className="name"> {props.tweet.name}</span>
          </a>
          <a
            className="name-link"
            href={"https://twitter.com/" + props.tweet.username}
          >
            <span className="username">@{props.tweet.username} </span>
          </a>
          <p className="tweet-date">{props.tweet.date}</p>
        </div>
      </div>
      <div className="tweet-body">
        <p>{props.tweet.tweetText}</p>
        <p className="hashtags">
          {props.tweet.hastags.map((hashTag) => (
            <span className="hashtag">#{hashTag} </span>
          ))}
        </p>

        {props.tweet.media && (
          <img src={props.tweet.media} alt={props.tweet.name} />
        )}
      </div>
      <div className="tweet-footer flex">
        <p className="replies">
          <i class="far fa-comment"></i>
          <span>{props.tweet.replies}</span>
        </p>
        <p className="retweet">
          <i class="fas fa-retweet"></i>
          <span> {props.tweet.retweets}</span>
        </p>
        <p className="likes">
          <i class="far fa-heart"></i>
          <span>{props.tweet.likes}</span>
        </p>
      </div>
    </article>
  );
}

export default Tweet;
