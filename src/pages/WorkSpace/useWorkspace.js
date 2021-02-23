import { useState } from "react";
import { useDisableBodyScroll } from "../../components/common/useDisableBodyScroll";
import useScrollToTop from "../../components/common/useScrollToTop";
import { useMutation, useQuery } from "react-query";
import { compile } from "../../api/Compile";
import useLocalStorage from "../../components/common/useLocalStorage";
import { getAllSubmissions } from "../../api/Submission";

const langId = {
  javascript: "js",
  typescript: "ts",
  java: "java",
};

const useWorkspace = () => {
  useScrollToTop();
  useDisableBodyScroll(true);
  const [isCodeSubmitting, setCodeSubmitting] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState("1");
  const [latestSubmission, setLatestSubmission] = useState();
  const [activeLanguage, setActiveLanguage] = useLocalStorage(
    "activeLanguage",
    "javascript"
  );

  const [code, setCode] = useLocalStorage(
    `Code:${activeQuestionId}:${activeLanguage}`,
    ""
  );

  const { data: submissions } = useQuery(
    ["submissions", { activeQuestionId }],
    () => getAllSubmissions({ questionId: activeQuestionId })
  );

  const changeCode = (newCode, _) => {
    setCode(newCode);
  };

  const changeActiveLanguage = (langId) => {
    setActiveLanguage((currentLang) => {
      return langId;
    });
  };

  const mutation = useMutation(compile, {
    onSuccess: (data) => {
      setLatestSubmission(data);
      setCodeSubmitting(false);
    },
    onError: (err) => {
      console.log(err);
      setCodeSubmitting(false);
    },
  });

  const onCodeSubmit = () => {
    setCodeSubmitting(true);
    mutation.mutate({
      source: code,
      lang: langId[activeLanguage],
      questionId: activeQuestionId,
    });
  };

  const changeActiveQuestionId = (id) => {
    setActiveQuestionId(id);
  };

  return {
    isCodeSubmitting,
    onCodeSubmit,
    activeQuestionId,
    changeActiveQuestionId,
    code,
    changeCode,
    activeLanguage,
    changeActiveLanguage,
    submissions,
    latestSubmission,
  };
};

export default useWorkspace;
