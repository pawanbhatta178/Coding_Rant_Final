import React from "react";
import { IoCloudUploadSharp } from "react-icons/io5";

const NoLatestSubmission = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full pt-8">
      <div className="icon-accent text-6xl">
        <IoCloudUploadSharp />{" "}
      </div>
      <div className="text-lg text-accent font-extralight text-center">
        Submit the code and see what the result will be like.
      </div>
    </div>
  );
};

export default NoLatestSubmission;
