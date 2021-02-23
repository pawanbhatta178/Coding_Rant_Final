import { useLayoutEffect, useState } from "react";
import Description from "../Description/Description";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Result from "../Result/Result";

const TabInstance = ({ tabs, ...props }) => {
  const [componentToRender, setComponentToRender] = useState("description");

  useLayoutEffect(() => {
    const [activeTab] = tabs.filter((tab) => {
      return tab.open === true;
    });
    setComponentToRender(activeTab.id);
  }, [tabs]);

  return (
    <>
      <Description {...props} show={componentToRender === "description"} />
      <LeaderBoard {...props} show={componentToRender === "leaderboard"} />
      <Result {...props} show={componentToRender === "result"} />
    </>
  );
};

export default TabInstance;
