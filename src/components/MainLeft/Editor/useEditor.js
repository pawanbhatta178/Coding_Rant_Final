import useLocalStorage from "../../common/useLocalStorage";
import { useMutation } from "react-query";
import { getDefaultCode } from "../../../api/DefaultCode";
import { langId } from "../../../constants/languages";
import { useState } from "react";

const useEditor = ({ activeQuestionId, activeLanguage, changeCode }) => {
  const [theme, setTheme] = useLocalStorage("theme", "vs-dark");
  const [isDialogBoxOn, setIsDialogBoxOn] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "vs-dark" : "light");
  };

  const mutation = useMutation(getDefaultCode, {
    onSuccess: (data) => {
      changeCode(data.code);
    },
    onError: (err) => {
      console.log("couldnt recover the default state");
    },
  });

  const retrieveDefaultCode = () => {
    mutation.mutate({
      questionId: activeQuestionId,
      language: langId[activeLanguage],
    });
    setIsDialogBoxOn(false);
  };

  const doNotRetrieveDefaultCode = () => {
    setIsDialogBoxOn(false);
  };

  const toggleDialogBox = () => {
    setIsDialogBoxOn((current) => {
      return !current;
    });
  };

  return {
    theme,
    toggleTheme,
    retrieveDefaultCode,
    doNotRetrieveDefaultCode,
    isDialogBoxOn,
    toggleDialogBox,
  };
};

export default useEditor;
