import React from "react";

function NavLink(props) {
  return (
    <li className="nav-item">
      <a className="nav-link flex align-center" href={props.navLinkInfo.url}>
        <span className="icon">
          <i className={props.navLinkInfo.iconClass}></i>
        </span>
        <span className="nav-item-info">{props.navLinkInfo.navItem}</span>
      </a>
    </li>
  );
}

export default NavLink;
