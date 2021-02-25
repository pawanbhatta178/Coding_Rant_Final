import { useState, useEffect } from "react";
import { getAllSubmissions } from "../../../api/Submission";
import { StringToJson } from "../../common/StringToJson";
const useSubmission = ({ activeQuestionId, latestSubmission }) => {
  const [allSubmissions, setAllSubmissions] = useState([]);

  useEffect(() => {
    console.log("running");
    (async () => {
      const data = await getAllSubmissions({ questionId: activeQuestionId });
      const formattedData = StringToJson(data, "testResult");

      setAllSubmissions((_) => {
        return formattedData;
      });
    })();
  }, [activeQuestionId]);

  useEffect(() => {
    if (!latestSubmission) {
      return;
    }
    setAllSubmissions((currentSubmissions) => {
      return [...currentSubmissions, latestSubmission];
    });
  }, [latestSubmission]);

  return { allSubmissions };
};

export default useSubmission;
