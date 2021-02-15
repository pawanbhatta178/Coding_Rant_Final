import React, { useState } from "react";
import "./WorkSpace.css";
import SplitPane from "react-split-pane";
import useWindowDimensions from "../../components/common/useWindowDimensions";
const WorkSpace = () => {
  const { width } = useWindowDimensions();

  const resolveMinWidth = (viewWidth) => {
    if (viewWidth < 576) {
      return 200;
    }
    if (viewWidth < 768) {
      return 200;
    }
    if (viewWidth < 992) {
      return 250;
    }
    return 290;
  };

  const resolveMaxWidth = (viewWidth) => {
    if (viewWidth < 576) {
      return 300;
    }
    if (viewWidth < 768) {
      return 450;
    }
    if (viewWidth < 992) {
      return 690;
    }
    return 900;
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {console.log(width)}
      <SplitPane
        split="vertical"
        minSize={resolveMinWidth(width)}
        maxSize={resolveMaxWidth(width)}
        defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
        onChange={(size) => localStorage.setItem("splitPos", size)}
      >
        <div className="h-full border">HEy</div>
        <div className="h-full border">Hey</div>
      </SplitPane>
    </div>
  );
};

export default WorkSpace;
