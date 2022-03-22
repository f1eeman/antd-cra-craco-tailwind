import React, { useState } from "react";
import { Tabs } from "antd";
import { TabItem, TabList } from "./components";
import { Button } from "antd";
const { TabPane } = Tabs;

function App() {
  return (
    <>
      <div className="tw-mx-auto tw-m-7 tw-w-80 tw-border-2 tw-border-blue-600 tw-p-8">
        <TabList />
      </div>
    </>
  );
}

export default App;
