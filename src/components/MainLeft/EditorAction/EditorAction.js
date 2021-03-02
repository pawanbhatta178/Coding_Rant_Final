import React from "react";
import SubmitButton from "../../Button/SubmitButton";
import RectangleSpinner from "../../Loader/RectangleSpinner";
import { IoShuffle } from "react-icons/io5";
const EditorAction = ({
  isCodeSubmitting,
  onCodeSubmit,
  changeActiveQuestionId,
}) => {
  return (
    <div className="flex-0 flex justify-center items-center mt-1 h-10 mb-8">
      {isCodeSubmitting ? (
        <RectangleSpinner />
      ) : (
        <div className="flex  items-center justify-center w-full">
          <SubmitButton onClick={onCodeSubmit}>Submit</SubmitButton>
          <div className="p-2 rounded-full hover-transition">
            {" "}
            <IoShuffle
              className="text-xl"
              onClick={changeActiveQuestionId}
            ></IoShuffle>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorAction;
