import React from "react";
import { AiOutlineOrderedList } from "react-icons/ai";

const NoPreviousSubmission = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full pt-8">
      <div className="icon-accent text-6xl">
        <AiOutlineOrderedList />{" "}
      </div>
      <div className="text-base  opacity-30  font-extralight text-center">
        All of your submissions that was ever submitted for this challenge will
        appear here.
      </div>
    </div>
  );
};

export default NoPreviousSubmission;
