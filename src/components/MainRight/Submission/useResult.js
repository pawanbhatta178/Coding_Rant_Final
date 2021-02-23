import { useState, useEffect } from "react";

const useResult = ({ submissions: initialSubmissions, latestSubmission }) => {
  const [currentSubmissions, setCurrentSubmissions] = useState(
    initialSubmissions
  );

  useEffect(() => {
    if (!latestSubmission) {
      return;
    }
    setCurrentSubmissions((currentSubmissions) => {
      const newSubmissionState = [...currentSubmissions];
      newSubmissionState.push(latestSubmission);
      return newSubmissionState;
    });
  }, [latestSubmission]);

  return { currentSubmissions, latestSubmission };
};

export default useResult;
