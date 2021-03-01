import useLocalStorage from "../../common/useLocalStorage";

const useEditor = ({ activeQuestionId, activeLanguage }) => {
  const [theme, setTheme] = useLocalStorage("theme", "vs-dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "vs-dark" : "light");
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useEditor;
