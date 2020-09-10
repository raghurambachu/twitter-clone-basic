import React from "react";

function Card(props) {
  const Component = props.component;
  return (
    <div className={props.className}>
      <h3>{props.header}</h3>
      <ul>
        {props.list.map((listItem) => {
          return (
            <li className={props.childClassName}>
              <Component componentContent={listItem} />
            </li>
          );
        })}
      </ul>
      <a className="show-more" href="/">
        Show More
      </a>
    </div>
  );
}

export default Card;
