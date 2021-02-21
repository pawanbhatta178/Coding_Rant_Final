import React from "react";
import SubmitButton from "../../Button/SubmitButton";

const EditorAction = ({ isCodeSubmitting, onCodeSubmit }) => {
  return (
    <div className="flex justify-center items-center h-full border-t mb-8">
      {console.log(isCodeSubmitting)}
      <SubmitButton onClick={onCodeSubmit}>Submit</SubmitButton>
    </div>
  );
};

export default EditorAction;
