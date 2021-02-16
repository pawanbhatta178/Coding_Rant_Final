import React from "react";
import "./WorkSpace.css";
import Splitter from "../../components/SplitScreen/Splitter";
import LeftPane from "../../components/SplitScreen/LeftPane";
import RightPane from "../../components/SplitScreen/RightPane";
import Editor from "../../components/MainLeft/Editor/Editor";
import WorkSpaceWrapper from "../../components/Wrapper/WorkSpaceWrapper";
import NavBarWorkSpace from "../../components/NavBar/NavBarWorkSpace";
import { useDisableBodyScroll } from "../../components/common/useDisableBodyScroll";

const WorkSpace = () => {
  useDisableBodyScroll(true, true);
  return (
    <WorkSpaceWrapper>
      <NavBarWorkSpace />
      <div className="w-full h-full">
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
