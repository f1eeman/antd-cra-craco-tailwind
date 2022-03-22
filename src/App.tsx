import React, { useState } from "react";
import { Tabs } from "antd";
import { TabItem, TabList } from "./components";
import { Button } from "antd";

const data = [
  {
    tabName: "Tab_1",
    key: "1",
    tabContent: <p>Conte</p>,
  },
  {
    tabName: "Tab_2",
    key: "2",
  },
  {
    tabName: "Tab_3",
    key: "3",
  },
  {
    tabName: "Tab_4",
    key: "4",
  },
];

const tabItemTemplate = {
  tabName: "Tab",
  key: 0,
  tabContent: null,
};

function App() {
  return (
    <>
      {/*<div className="tw-mx-auto tw-m-7 tw-mb-20 tw-w-80 tw-border-2 tw-border-blue-600 tw-p-8">*/}
      {/*  <Tabs>*/}
      {/*    {Array(5).map((item, index) => (*/}
      {/*      <TabItem*/}
      {/*        key={`${index + 1}`}*/}
      {/*        id={`${index + 1}`}*/}
      {/*        tabName={`${tabItemTemplate.tabName}_${index + 1}`}*/}
      {/*        tabContent={<p>`Content of Tab Pane ${index + 1}`</p>}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </Tabs>*/}
      {/*</div>*/}
      <div className="tw-mx-auto tw-m-7 tw-w-80 tw-border-2 tw-border-blue-600 tw-p-8">
        <TabList />
      </div>
    </>
  );
}

export default App;
