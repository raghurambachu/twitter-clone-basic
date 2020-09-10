import React from "react";
import Card from "./Card";
import Hashtag from "./Hashtag";
import Follow from "./Follow";
import hastagsData from "../data/hashtagsData";
import userData from "../data/userData";

function RightSidebar(props) {
  return (
    <section className="right-sidebar">
      <div className="right-sidebar-wrapper">
        <input
          type="text"
          placeholder="Search Twitter"
          onChange={() => {}}
          className="input-search"
        />

        <Card
          className="hashtags card"
          component={Hashtag}
          header="What's Happening"
          list={hastagsData}
          childClassName="hashtag"
        />

        <Card
          className="follow card"
          component={Follow}
          header="Who to follow"
          list={userData}
          childClassName="to-follow"
        />
      </div>
    </section>
  );
}

export default RightSidebar;
