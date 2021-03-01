import { useState, useEffect } from "react";
import { getAllSubmissions } from "../../../api/Submission";
import { StringToJson } from "../../common/StringToJson";
import { useQuery } from "react-query";

const useSubmission = ({ activeQuestionId, latestSubmission }) => {
  const [allSubmissions, setAllSubmissions] = useState([]);

  const { data, isLoading } = useQuery(["submissions", activeQuestionId], () =>
    getAllSubmissions({ questionId: activeQuestionId })
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    const formattedData = StringToJson(data, "testResult").reverse();

    setAllSubmissions((_) => {
      return formattedData;
    });
  }, [data]);

  useEffect(() => {
    if (!latestSubmission) {
      return;
    }
    if (latestSubmission?.error) {
      return;
    }
    setAllSubmissions((currentSubmissions) => {
      return [latestSubmission, ...currentSubmissions];
    });
  }, [latestSubmission]);
  return { allSubmissions, isLoading };
};

export default useSubmission;
