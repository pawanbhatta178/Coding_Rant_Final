import { useLayoutEffect, useState } from "react";

const TabInstance = ({ tabs }) => {
  const [componentToRender, setComponentToRender] = useState();

  useLayoutEffect(() => {
    const [activeTab] = tabs.filter((tab) => {
      return tab.open === true;
    });
    setComponentToRender(activeTab.id);
  }, [tabs]);

  return <div>{componentToRender}</div>;
};

export default TabInstance;
