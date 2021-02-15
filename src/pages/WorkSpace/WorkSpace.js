import React from "react";
import "./WorkSpace.css";
import Splitter from "../../components/SplitScreen/Splitter";
import LeftPane from "../../components/SplitScreen/LeftPane";
import RightPane from "../../components/SplitScreen/RightPane";
import NavBar from "../../components/NavBar/NavBar";

const WorkSpace = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-80">
        <Splitter>
          <LeftPane></LeftPane>
          <RightPane></RightPane>
        </Splitter>
      </div>
    </>
  );
};

export default WorkSpace;
