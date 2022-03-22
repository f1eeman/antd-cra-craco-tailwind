import { Tabs } from "antd";
import { TabItemContent } from "./TabItemContent";
const { TabPane } = Tabs;

const TabList = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        <TabItemContent />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <TabItemContent />
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <TabItemContent />
      </TabPane>
    </Tabs>
  );
};

export { TabList };
