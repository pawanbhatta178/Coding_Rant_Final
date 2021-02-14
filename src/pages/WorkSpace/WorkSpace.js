import React from "react";
import "./WorkSpace.css";
import Split from "react-split";

const WorkSpace = () => {
  return (
    <div className="w-screen h-screen border border-purple-500 justify-center items-center">
      <Split className="w-full h-full flex" sizes={[25, 75]}>
        <div className="code-editor border ">Code-editor</div>
        <div className="question border">Question</div>
      </Split>
    </div>
  );
};

export default WorkSpace;
