import React from "react";
import "./WorkSpace.css";
import Splitter from "../../components/SplitScreen/Splitter";
import LeftPane from "../../components/SplitScreen/LeftPane";
import RightPane from "../../components/SplitScreen/RightPane";
import Editor from "../../components/MainLeft/Editor/Editor";
import WorkSpaceWrapper from "../../components/Wrapper/WorkSpaceWrapper";
import { useDisableBodyScroll } from "../../components/common/useDisableBodyScroll";
import NavBarWorkSpace from "../../components/NavBar/NavBarWorkSpace";

const WorkSpace = () => {
  useDisableBodyScroll(true); //Disabled scrolling because react-pane goes boyond its parent height
  return (
    <WorkSpaceWrapper>
      <NavBarWorkSpace />
      <div className="w-full h-full overflow-hidden">
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
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
