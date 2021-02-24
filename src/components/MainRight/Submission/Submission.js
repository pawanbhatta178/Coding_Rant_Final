import React from "react";
import useSubmission from "./useSubmission";
import LatestSubmission from "./LatestSubmission";
import PreviousSubmissions from "./PreviousSubmissions";

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
      <div className="h-3/6 overflow-y-auto">
        <div className="sticky-header">Latest Submission</div>
        <LatestSubmission
          isCodeSubmitting={isCodeSubmitting}
          submission={latestSubmission}
        />
      </div>
      <div className="py-4 border-t border-dashed">
        <div className="sticky-header mb-2">Previous Submissions</div>
        {allSubmissions &&
          allSubmissions.map((submission) => {
            return <PreviousSubmissions submission={submission} />;
          })}
      </div>
    </div>
  );
};

export default Result;
