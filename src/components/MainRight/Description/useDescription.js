import { useQuery } from "react-query";
import { getQuestion } from "../../../api/Question";

const useDescription = ({ activeQuestionId, isCodeSubmitting }) => {
  const { data, isLoading, error } = useQuery(
    ["question", activeQuestionId],
    () => getQuestion({ questionId: activeQuestionId })
  );
  console.log(data, isLoading, error);
  return { data, isLoading, error };
};

export default useDescription;
