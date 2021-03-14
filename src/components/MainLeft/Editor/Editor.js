import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import useEditor from "./useEditor";
import EditorNav from "../EditorNav/EditorNav";
import EditorAction from "../EditorAction/EditorAction";
import RevertToDefault from "./RevertToDefault";

const Editor = ({
  isCodeSubmitting,
  onCodeSubmit,
  activeQuestionId,
  changeActiveQuestionId,
  activeLanguage,
  changeActiveLanguage,
  changeCode,
  code,
}) => {
  const editorRef = useRef();
  const [setIsEditorReady] = useState(false);
  const {
    theme,
    toggleTheme,
    retrieveDefaultCode,
    doNotRetrieveDefaultCode,
    isDialogBoxOn,
    toggleDialogBox,
  } = useEditor({
    activeQuestionId,
    activeLanguage,
    changeCode,
  });

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  return (
    <div className="flex flex-col h-full">
      <EditorNav
        toggleTheme={toggleTheme}
        theme={theme}
        activeLanguage={activeLanguage}
        changeActiveLanguage={changeActiveLanguage}
        retrieveDefaultCode={toggleDialogBox}
      />
      <MonacoEditor
        language={activeLanguage}
        height="83vh"
        value={code}
        editorDidMount={handleEditorDidMount}
        onChange={changeCode}
        theme={theme}
      />
      <EditorAction
        onCodeSubmit={onCodeSubmit}
        isCodeSubmitting={isCodeSubmitting}
        changeActiveQuestionId={changeActiveQuestionId}
      />
      <RevertToDefault
        show={isDialogBoxOn}
        toggle={toggleDialogBox}
        retrieveDefaultCode={retrieveDefaultCode}
        doNotRetrieveDefaultCode={doNotRetrieveDefaultCode}
      />
    </div>
  );
};
export default Editor;
