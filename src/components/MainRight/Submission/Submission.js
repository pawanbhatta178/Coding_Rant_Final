import React from "react";
import useSubmission from "./useSubmission";
import LatestSubmission from "./LatestSubmission";
import PreviousSubmissions from "./PreviousSubmissions";
import NoPreviousSubmission from "./NoPreviousSubmission";

const Submission = ({
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
    <div className="px-4 md:px-6  h-full">
      <div className="h-3/6 overflow-y-auto">
        <div className="sticky-header">Latest Submission</div>
        <LatestSubmission
          isCodeSubmitting={isCodeSubmitting}
          submission={latestSubmission}
        />
      </div>
      <div className="py-4 border-t border-dashed">
        <div className="sticky-header mb-2">Previous Submissions</div>

        {allSubmissions?.length > 0 ? (
          allSubmissions
            .filter((submission) => {
              if (latestSubmission) {
                return (
                  latestSubmission.submissionId !== submission.submissionId
                );
              }
              return true;
            })
            .map((submission, i) => {
              return (
                <PreviousSubmissions
                  key={submission.submittedAt}
                  submission={submission}
                />
              );
            })
        ) : (
          <NoPreviousSubmission />
        )}
      </div>
    </div>
  );
};

export default Submission;
