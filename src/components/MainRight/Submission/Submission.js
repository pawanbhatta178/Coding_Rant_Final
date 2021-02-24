import React from "react";
import useSubmission from "./useSubmission";
import LatestSubmission from "./LatestSubmission";
import PreviousSubmissions from "./PreviousSubmissions";
import RectangleSpinner from "../../Loader/RectangleSpinner";

const Result = ({
  show,
  isCodeSubmitting,
  activeQuestionId,
  submissions,
  latestSubmission,
}) => {
  const { allSubmissions } = useSubmission({
    activeQuestionId,
    submissions,
    latestSubmission,
  });
  if (!show) return null;
  return (
    <div className="px-4 md:px-8 h-full">
      {console.log(allSubmissions)}
      <LatestSubmission
        isCodeSubmitting={isCodeSubmitting}
        submission={latestSubmission}
      />
      <div className="py-4 border-t border-dashed">
        <div className="text-lg font-extralight text-secondary pb-4 text-center">
          Previous Submissions
        </div>
        {allSubmissions &&
          allSubmissions.map((submission) => {
            return <PreviousSubmissions submission={submission} />;
          })}
      </div>
    </div>
  );
};

export default Result;
