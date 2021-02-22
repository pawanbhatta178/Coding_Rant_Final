import React from "react";
import TabHeader from "./TabHeader";
import useTabs from "./useTabs";

const Tabs = () => {
  const { changeActiveTab, tabs } = useTabs();
  return (
    <div className="flex flex-col h-full ">
      <div className="flex ">
        {tabs.map((tab) => (
          <TabHeader
            key={tab.id}
            name={tab.name}
            id={tab.id}
            selected={tab.open}
            handleTabClick={changeActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
