import { useState } from "react";
import { useDisableBodyScroll } from "../../components/common/useDisableBodyScroll";
import useScrollToTop from "../../components/common/useScrollToTop";

const useWorkspace = () => {
  useScrollToTop();
  useDisableBodyScroll(true);
  const [isCodeSubmitting, setCodeSubmitting] = useState(false);

  const onCodeSubmit = () => {
    setCodeSubmitting(!isCodeSubmitting);
  };

  return { isCodeSubmitting, onCodeSubmit };
};

export default useWorkspace;
