import { useState, useEffect } from "react";

const useResult = ({ submissions: initialSubmissions, latestSubmission }) => {
  const [currentSubmissions, setCurrentSubmissions] = useState([]);

  useEffect(() => {
    if (!initialSubmissions) {
      return;
    }
    setCurrentSubmissions(initialSubmissions);
  }, [initialSubmissions]);

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
