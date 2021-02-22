import { useState } from "react";

const useTabs = () => {
  const [tabs, setTabs] = useState([
    { id: "description", name: "Description", open: true },
    { id: "result", name: "Result", open: false },
    { id: "ranking", name: "LeaderBoard", open: false },
  ]);

  const changeActiveTab = (e) => {
    const { value: tabId } = e.target;
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
