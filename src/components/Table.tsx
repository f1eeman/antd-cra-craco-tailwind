import React, { useEffect, useState } from "react";
import { Table, Space, Button } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import qs from "qs";
import { Data } from "./types";

const getRandomuserParams = (params: Partial<Params>) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

type State = {
  data: Data[];
  pagination: TablePaginationConfig;
  loading: boolean;
  filteredInfo: Record<string, string[]>;
  sortedInfo: Record<string, any>;
};

type Params = {
  pagination: TablePaginationConfig;
  sortField: "gender" | "name";
  sortOrder: "ascend" | "descend";
  gender: string[];
};

const initState = {
  data: [],
  pagination: {
    current: 1,
    pageSize: 10,
  },
  loading: false,
};

const MyTable = () => {
  const [state, setState] = useState<Partial<State>>(initState);

  const getList = (params: Partial<Params> = {}) => {
    console.log("params", params);
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data: data.results,
          pagination: {
            ...params.pagination,
            total: 200,
          },
        }));
      });
  };

  useEffect(() => {
    getList({
      pagination: state.pagination,
    });
  }, []);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, string[]>,
    sorter: Record<string, any>
  ) => {
    getList({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  const resetFilters = () => {
    getList({
      pagination: initState.pagination,
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (name: Record<string, string>) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "20%",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Button onClick={resetFilters}>Reset filters</Button>
      <Table
        columns={columns}
        rowKey={(record) => {
          return record.login.uuid;
        }}
        dataSource={state.data}
        pagination={state.pagination}
        loading={state.loading}
        onChange={handleTableChange}
      />
    </Space>
  );
};

export { MyTable };
