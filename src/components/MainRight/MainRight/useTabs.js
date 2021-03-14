import { useState, useEffect } from "react";

const useTabs = ({ isCodeSubmitting }) => {
  const [tabs, setTabs] = useState([
    { id: "description", name: "Description", open: true },
    { id: "result", name: "Submissions", open: false },
    { id: "leaderboard", name: "LeaderBoard", open: false },
  ]);

  useEffect(() => {
    if (!isCodeSubmitting) {
      return;
    }
    setTabs((currentTabs) => {
      const newTabState = currentTabs.map((tab) => {
        if (tab.id === "result") {
          return {
            ...tab,
            open: true,
          };
        }
        return { ...tab, open: false };
      });
      return newTabState;
    });
  }, [isCodeSubmitting]);

  const changeActiveTab = (tabId) => {
    setTabs(
      tabs.map((tab) => {
        if (tab.id === tabId) {
          return { ...tab, open: true };
        }
        return { ...tab, open: false };
      })
    );
  };

  return { tabs, changeActiveTab };
};

export default useTabs;
