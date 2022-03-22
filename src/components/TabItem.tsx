import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

type Props = {
  tabName: string;
  tabContent: React.ReactNode;
  id: string;
};

const TabItem = ({ tabName, tabContent, id }: Props) => {
  return (
    <TabPane tab={tabName} key={id}>
      {tabContent}
    </TabPane>
  );
};

export { TabItem };
