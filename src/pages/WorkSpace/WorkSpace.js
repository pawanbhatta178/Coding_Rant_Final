import React from "react";
import "./WorkSpace.css";
import SplitPane from "react-split-pane";
import useWindowDimensions from "../../components/common/useWindowDimensions";
import useLocalStorage from "../../components/common/useLocalStorage";
import {
  resolveHalfWidth,
  resolveMaxWidth,
  resolveMinWidth,
} from "../../helper/mix/SplitWidth";

const WorkSpace = () => {
  const { width } = useWindowDimensions();
  const [splitPosition, setSplitPosition] = useLocalStorage(
    "splitPosition",
    resolveHalfWidth(width)
  );

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {console.log(width)}
      <SplitPane
        split="vertical"
        minSize={resolveMinWidth(width)}
        maxSize={resolveMaxWidth(width)}
        defaultSize={parseInt(splitPosition)}
        onChange={(size) => setSplitPosition(size)}
      >
        <div className="h-full border">HEy</div>
        <div className="h-full border">Hey</div>
      </SplitPane>
    </div>
  );
};

export default WorkSpace;
