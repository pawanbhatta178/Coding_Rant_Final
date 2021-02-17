import useLocalStorage from "../../common/useLocalStorage";

const ACTIVE_QUESTION_ID = "1";

const useEditor = () => {
  const [theme, setTheme] = useLocalStorage("theme", "vs-dark");
  const [activeLanguage, setActiveLanguage] = useLocalStorage(
    "activeLanguage",
    "javascript"
  );

  const [code, setCode] = useLocalStorage(
    `Code:${ACTIVE_QUESTION_ID}:${activeLanguage}`,
    ""
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "vs-dark" : "light");
  };

  const changeLanguage = (langId) => {
    setActiveLanguage((currentLang) => {
      return langId;
    });
  };

  const updateCode = (newCode, _) => {
    console.log(newCode);
    setCode(newCode);
  };

  return {
    activeLanguage,
    changeLanguage,
    code,
    updateCode,
    theme,
    toggleTheme,
  };
};

export default useEditor;
