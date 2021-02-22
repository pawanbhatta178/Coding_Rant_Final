import React from "react";
import TabHeader from "./TabHeader";
import useTabs from "./useTabs";
import TabInstance from "./TabInstance";
const Tabs = () => {
  const { changeActiveTab, tabs } = useTabs();
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-0 justify-start items-center h-11 text-sm  ">
        <div className="flex rounded-lg bg-secondary flex-nowrap">
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
      <div className="flex-1  mb-8 overflow-y-scroll bg-secondary">
        <TabInstance tabs={tabs} />
      </div>
    </div>
  );
};

export default Tabs;
