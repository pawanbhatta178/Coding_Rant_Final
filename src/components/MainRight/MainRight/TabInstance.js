import { useLayoutEffect, useState } from "react";
import Description from "../Description/Description";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Result from "../Result/Result";

const TabInstance = ({ tabs }) => {
  const [componentToRender, setComponentToRender] = useState("description");

  useLayoutEffect(() => {
    const [activeTab] = tabs.filter((tab) => {
      return tab.open === true;
    });
    setComponentToRender(activeTab.id);
  }, [tabs]);

  if (componentToRender === "description") return <Description />;
  if (componentToRender === "result") return <Result />;
  if (componentToRender === "leaderboard") return <LeaderBoard />;
};

export default TabInstance;
