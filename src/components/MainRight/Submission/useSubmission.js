import { useState, useEffect } from "react";

const useSubmission = ({
  submissions: initialSubmissions,
  latestSubmission,
}) => {
  const [allSubmissions, setAllSubmissions] = useState([]);

  useEffect(() => {
    if (!initialSubmissions) {
      return;
    }
    setAllSubmissions(initialSubmissions);
  }, [initialSubmissions]);

  useEffect(() => {
    if (!latestSubmission) {
      return;
    }
    setAllSubmissions((currentSubmissions) => {
      const newSubmissionState = [...currentSubmissions];
      newSubmissionState.push(latestSubmission);
      return newSubmissionState;
    });
  }, [latestSubmission]);

  return { allSubmissions };
};

export default useSubmission;
