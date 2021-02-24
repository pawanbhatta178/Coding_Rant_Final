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
    setAllSubmissions((current) => [...current, initialSubmissions]);
  }, [initialSubmissions]);

  // useEffect(() => {
  //   if (!latestSubmission) {
  //     return;
  //   }
  //   setAllSubmissions((currentSubmissions) => {
  //     return [...currentSubmissions, latestSubmission];
  //   });
  // }, [latestSubmission]);

  return { allSubmissions };
};

export default useSubmission;
