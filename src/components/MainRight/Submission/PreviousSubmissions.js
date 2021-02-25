import React from "react";
import LatestSubmission from "./LatestSubmission";
import { BsFillCaretDownFill, BsHash } from "react-icons/bs";
import DropDownContent from "../../Animated/DropDownContent";

const style = (error, result, passed) => {
  if (error) {
    return "border-red-600";
  }
  if (passed) {
    return "border-green-600";
  }
  if (result) {
    return "border-yellow-600";
  }
};

const SmallCardStyles = {
  passed: "bg-green-100 border-green-400 text-green-700",
  error: "bg-red-100 border-red-600 text-red-700",
  failed: "bg-yellow-100 border-yellow-600 text-yellow-700",
  best: "bg-pink-500 text-white",
};

const SmallCard = ({ type }) => {
  return (
    <div
      className={`text-xs font-light p-1 w-12 flex items-center justify-center capitalize rounded-lg shadow-sm ${SmallCardStyles[type]}`}
    >
      {type}
    </div>
  );
};

const PreviousSubmission = ({ submission }) => {
  const [toggleContent, setToggleContent] = React.useState(false);

  const error = submission?.error;
  const passed = submission?.passedAllTests;
  const ranked = submission?.ranked;
  const result = submission?.testResult;

  return (
    <>
      <div
        className={`flex justify-between items-center p-2 mb-4  cursor-pointer border border-l-4 hover-transition rounded-sm ${style(
          error,
          result,
          passed
        )}`}
        onClick={() => setToggleContent(!toggleContent)}
      >
        {console.log(submission)}
        <div className="text-sm flex items-center gap-x-1">
          <div>
            <BsHash />{" "}
          </div>
          {` `}
          <div className=" text-base font-semibold">
            {submission.submissionId}
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          {ranked && <SmallCard type="best" />}
          {passed && <SmallCard type="passed" />}
          {error && <SmallCard type="error" />}
          {!passed && !error && <SmallCard type="failed" />}

          <BsFillCaretDownFill />
        </div>
      </div>
      <DropDownContent show={toggleContent}>
        <div className="pb-8">
          <LatestSubmission submission={submission} />
        </div>
      </DropDownContent>
    </>
  );
};

export default PreviousSubmission;
