import React from "react";
import SubmitButton from "../../Button/SubmitButton";
import RectangleSpinner from "../../Loader/RectangleSpinner";

const EditorAction = ({ isCodeSubmitting, onCodeSubmit }) => {
  return (
    <div className="flex justify-center items-center h-full mb-8">
      {console.log(isCodeSubmitting)}
      {isCodeSubmitting ? (
        <RectangleSpinner />
      ) : (
        <SubmitButton onClick={onCodeSubmit}>Submit</SubmitButton>
      )}
    </div>
  );
};

export default EditorAction;
