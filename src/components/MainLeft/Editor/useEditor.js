import useLocalStorage from "../../common/useLocalStorage";
import { useMutation } from "react-query";
import { getDefaultCode } from "../../../api/DefaultCode";
import { langId } from "../../../constants/languages";

const useEditor = ({ activeQuestionId, activeLanguage, changeCode }) => {
  const [theme, setTheme] = useLocalStorage("theme", "vs-dark");

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
  };

  return {
    theme,
    toggleTheme,
    retrieveDefaultCode,
  };
};

export default useEditor;
