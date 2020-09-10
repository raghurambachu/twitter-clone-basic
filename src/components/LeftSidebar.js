import React from "react";
import NavLink from "./NavLink";

function LeftSidebar(props) {
  return (
    <section className="left-sidebar flex justify-center">
      <div className="navbar">
        <div className="twitter-icon">
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <ul>
          {props.navData.map((navItem, index) => (
            <NavLink key={index} navLinkInfo={navItem} />
          ))}
        </ul>
        <button className="btn btn-tweet">Tweet</button>
      </div>
    </section>
  );
}

export default LeftSidebar;
