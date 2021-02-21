import React from "react";

const languages = [
  { value: "javascript", name: "JavaScript", selected: false },
  { value: "typescript", name: "TypeScript", selected: false },
  { value: "java", name: "Java", selected: false },
  { value: "python", name: "Python", selected: false },
];

const useEditorNav = (initialLanguage, changeActiveLanguage) => {
  const [languageOptions, setLanguageOptions] = React.useState(
    languages.map((language) => {
      return { ...language, selected: !!(initialLanguage === language.value) };
    })
  );

  const handleSelectChange = (e) => {
    setLanguageOptions((currentOption) => {
      return currentOption.map((option) => {
        if (option.value === e.target.value) {
          return { ...option, selected: true };
        }
        return { ...option, selected: false };
      });
    });
    changeActiveLanguage(e.target.value);
  };

  return { languageOptions, handleSelectChange };
};

export default useEditorNav;
