import React from "react";
import CannotFetch from "../../Error/CannotFetch";
import RectangleSpinner from "../../Loader/RectangleSpinner";
import useDescription from "./useDescription";
import CardInput from "./CardInput";

const Description = ({ show, activeQuestionId, isCodeSubmitting }) => {
  const { data, isLoading, error } = useDescription({
    activeQuestionId,
    isCodeSubmitting,
  });

  if (!show) return null;
  if (error) return <CannotFetch />;
  if (isLoading) return <RectangleSpinner />;
  return (
    <div className="mx-4 py-4">
      <div className="sticky top-0 bg-secondary font-semibold text-2xl pt-2 pb-2  shadow-sm capitalize">
        {data.id}. {data.title}
      </div>
      <div className="pt-4 font-light text-secondary">
        {" "}
        {data.questionPrompt}
      </div>
      <CardInput title="Sample Input" className="mt-4">
        {data.sampleInput}
      </CardInput>
      <CardInput title="Sample Output" className="mt-4">
        {data.sampleOutput}
      </CardInput>
    </div>
  );
};

export default Description;
