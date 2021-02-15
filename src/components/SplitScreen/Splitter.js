import React from "react";
import SplitPane from "react-split-pane";
import useLocalStorage from "../common/useLocalStorage";
import useWindowDimensions from "../common/useWindowDimensions";
import {
  resolveHalfWidth,
  resolveMaxWidth,
  resolveMinWidth,
} from "../../helper/mix/SplitWidth";
import "./Splitter.css";

const Splitter = ({ children }) => {
  const { width } = useWindowDimensions();
  const [splitPosition, setSplitPosition] = useLocalStorage(
    "splitPosition",
    resolveHalfWidth(width)
  );
  return (
    <SplitPane
      split="vertical"
      minSize={resolveMinWidth(width)}
      maxSize={resolveMaxWidth(width)}
      defaultSize={parseInt(splitPosition)}
      onChange={(size) => setSplitPosition(size)}
    >
      {children[0]}
      {children[1]}
    </SplitPane>
  );
};

export default Splitter;
