import React from "react";
import useResult from "./useResult";
import LatestSubmission from "./LatestSubmission";
import PreviousSubmissions from "./PreviousSubmissions";

const Result = ({
  show,
  isCodeSubmitting,
  activeQuestionId,
  submissions,
  latestSubmission,
}) => {
  const { currentSubmissions } = useResult({
    activeQuestionId,
    submissions,
    latestSubmission,
  });
  if (!show) return null;
  if (isCodeSubmitting) return <div>Submitting</div>;
  return (
    <>
      {console.log(currentSubmissions)}
      <LatestSubmission submission={latestSubmission} />
      <PreviousSubmissions submissions={currentSubmissions} />
    </>
  );
};

export default Result;
