import React from "react";
import "./WorkSpace.css";
import Splitter from "../../components/SplitScreen/Splitter";
import LeftPane from "../../components/SplitScreen/LeftPane";
import RightPane from "../../components/SplitScreen/RightPane";
import NavBarEditor from "../../components/NavBar/NavBarEditor";
import Editor from "../../components/MainLeft/Editor/Editor";

const WorkSpace = () => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBarEditor />
      <div className="w-screen h-20">
        <Splitter>
          <LeftPane>
            <div className="flex flex-col h-full">
              <Editor />
            </div>
          </LeftPane>
          <RightPane>
            <div className="flex flex-col h-full "></div>
          </RightPane>
        </Splitter>
      </div>
    </div>
  );
};

export default WorkSpace;
