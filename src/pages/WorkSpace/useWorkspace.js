import { useState } from "react";
import { useDisableBodyScroll } from "../../components/common/useDisableBodyScroll";
import useScrollToTop from "../../components/common/useScrollToTop";
import { useMutation } from "react-query";
import { compile } from "../../api/Compile";
import useLocalStorage from "../../components/common/useLocalStorage";

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

  const [activeLanguage, setActiveLanguage] = useLocalStorage(
    "activeLanguage",
    "javascript"
  );

  const [code, setCode] = useLocalStorage(
    `Code:${activeQuestionId}:${activeLanguage}`,
    ""
  );
  const changeCode = (newCode, _) => {
    console.log(newCode);
    setCode(newCode);
  };

  const changeActiveLanguage = (langId) => {
    setActiveLanguage((currentLang) => {
      return langId;
    });
  };

  const mutation = useMutation(compile, {
    onSuccess: (data) => {
      console.log(data);
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
  };
};

export default useWorkspace;
