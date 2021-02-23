import "./WorkSpace.css";
import Splitter from "../../components/SplitScreen/Splitter";
import LeftPane from "../../components/SplitScreen/LeftPane";
import RightPane from "../../components/SplitScreen/RightPane";
import Editor from "../../components/MainLeft/Editor/Editor";
import WorkSpaceWrapper from "../../components/Wrapper/WorkSpaceWrapper";
import NavBarWorkSpace from "../../components/NavBar/NavBarWorkSpace";
import useWorkspace from "./useWorkspace";
import Tabs from "../../components/MainRight/MainRight/Tabs";

const WorkSpace = () => {
  const {
    isCodeSubmitting,
    onCodeSubmit,
    activeQuestionId,
    changeActiveQuestionId,
    code,
    changeCode,
    activeLanguage,
    changeActiveLanguage,
  } = useWorkspace();
  return (
    <WorkSpaceWrapper>
      <NavBarWorkSpace />
      <div className="w-full h-full">
        <Splitter>
          <LeftPane>
            <Editor
              isCodeSubmitting={isCodeSubmitting}
              onCodeSubmit={onCodeSubmit}
              activeQuestionId={activeQuestionId}
              changeActiveQuestionId={changeActiveQuestionId}
              activeLanguage={activeLanguage}
              changeActiveLanguage={changeActiveLanguage}
              code={code}
              changeCode={changeCode}
            />
          </LeftPane>
          <RightPane>
            <Tabs
              activeQuestionId={activeQuestionId}
              isCodeSubmitting={isCodeSubmitting}
            />
          </RightPane>
        </Splitter>
      </div>
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
