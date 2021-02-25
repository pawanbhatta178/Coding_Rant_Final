import { useState, useEffect } from "react";
import { getAllSubmissions } from "../../../api/Submission";
import { StringToJson } from "../../common/StringToJson";
import useFetch from "../../common/useFetch";
const useSubmission = ({ activeQuestionId, latestSubmission }) => {
  const [allSubmissions, setAllSubmissions] = useState([]);

  const { data } = useFetch(
    async () => await getAllSubmissions({ questionId: activeQuestionId })
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    const formattedData = StringToJson(data, "testResult");
    setAllSubmissions((_) => {
      return formattedData;
    });
  }, [data]);

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
