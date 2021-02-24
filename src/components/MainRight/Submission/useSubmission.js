import { useState, useEffect } from "react";

const useSubmission = ({ submissions, latestSubmission }) => {
  const [allSubmissions, setAllSubmissions] = useState(submissions || []);

  // useEffect(() => {
  //   if (!submissions) {
  //     return;
  //   }
  //   setAllSubmissions((currentSubmissions) => {
  //     return [...currentSubmissions, ...submissions];
  //   });
  // }, [submissions]);

  useEffect(() => {
    if (!latestSubmission) {
      return;
    }
    setAllSubmissions((current) => {
      const newState = [...current];
      newState.push(latestSubmission);
      return newState;
    });
  }, [latestSubmission]);

  return { allSubmissions, latestSubmission };
};

export default useSubmission;
