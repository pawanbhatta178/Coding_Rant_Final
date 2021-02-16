import React from "react";
import "./WorkSpace.css";
import Splitter from "../../components/SplitScreen/Splitter";
import LeftPane from "../../components/SplitScreen/LeftPane";
import RightPane from "../../components/SplitScreen/RightPane";
import NavBar from "../../components/NavBar/NavBar";
import Editor from "@monaco-editor/react";

const WorkSpace = () => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <div className="w-screen h-20">
        <Splitter>
          <LeftPane>
            <div className="flex flex-col h-full">
              <Editor />
            </div>
          </LeftPane>
          <RightPane>
            <div className="flex flex-col h-full ">
              HEy Enim exercitation eiusmod adipisicing commodo ut occaecat ea
              aliquip id. Ex mollit ad consequat reprehenderit officia. Laboris
              velit elit occaecat dolor do adipisicing ad sunt nostrud. Do
              excepteur non enim laboris irure do culpa deserunt ut dolor dolore
              id. Quis culpa in excepteur commodo in commodo in. Sint ut
              incididunt amet commodo elit mollit sunt elit dolore proident.
              Amet et adipisicing laboris esse do incididunt ut ipsum ullamco.
            </div>
          </RightPane>
        </Splitter>
      </div>
    </div>
  );
};

export default WorkSpace;
