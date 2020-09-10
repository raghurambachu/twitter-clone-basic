import React from "react";
import Tweet from "./Tweet";
import tweetData from "../data/tweetData";

function Content(props) {
  return (
    <section className="content-section">
      <div className="content-top flex space-between">
        <h2> Home</h2>
        <span>
          <i class="far fa-star"></i>
        </span>
      </div>
      <div className="content">
        {tweetData.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div>

      <ul></ul>
    </section>
  );
}

export default Content;
