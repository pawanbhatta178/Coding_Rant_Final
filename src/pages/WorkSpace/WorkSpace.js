import React from "react";
import "./WorkSpace.css";
import SplitPane from "react-split-pane";
const WorkSpace = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SplitPane
        split="vertical"
        minSize={50}
        defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
        onChange={(size) => localStorage.setItem("splitPos", size)}
      >
        <div className=" h-full border">HEy</div>
        <div className=" h-full border">Hey</div>
      </SplitPane>
    </div>
  );
};

export default WorkSpace;
