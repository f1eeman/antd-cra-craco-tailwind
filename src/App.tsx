import React, { useState } from "react";
import { Button } from "antd";
import { Table } from "./components/Table";

function App() {
  return (
    <>
      <div className="mx-auto m-7 w-4/5 border-2 border-blue-600 p-8">
        <Table />
      </div>
    </>
  );
}

export default App;
