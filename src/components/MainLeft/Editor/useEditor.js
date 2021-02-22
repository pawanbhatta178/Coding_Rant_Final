import useLocalStorage from "../../common/useLocalStorage";

const useEditor = (activeQuestionId) => {
  const [theme, setTheme] = useLocalStorage("theme", "vs-dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "vs-dark" : "light");
  };

  // const [activeLanguage, setActiveLanguage] = useLocalStorage(
  //   "activeLanguage",
  //   "typescript"
  // );

  // const [code, setCode] = useLocalStorage(
  //   `Code:${activeQuestionId}:${activeLanguage}`,
  //   ""
  // );
  // const updateCode = (newCode, _) => {
  //   console.log(newCode);
  //   setCode(newCode);
  // };

  // const changeActiveLanguage = (langId) => {
  //   setActiveLanguage((currentLang) => {
  //     return langId;
  //   });
  // };

  return {
    // activeLanguage,
    // changeActiveLanguage,
    // code,
    // updateCode,
    theme,
    toggleTheme,
  };
};

export default useEditor;
