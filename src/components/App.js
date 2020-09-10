import React from "react";
import LeftSidebar from "./LeftSidebar";
import Content from "./Content";
import RightSidebar from "./RightSidebar";
import navData from "../data/navData";

function App() {
  return (
    <div className="app">
      <LeftSidebar navData={navData} />
      <Content />
      <RightSidebar />
    </div>
  );
}

export default App;
