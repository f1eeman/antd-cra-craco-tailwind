import { useEffect, useState } from "react";
import {
  Table as AntTable,
  Switch,
  Popconfirm,
  Button,
  Spin,
  Modal,
} from "antd";
import { ColumnsType } from "antd/lib/table";

type DataItem = {
  key: number;
  name: string;
  age: number;
  address: string;
};

const Table = (): JSX.Element => {
  const [data, setData] = useState<DataItem[]>([]);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        setData((prevData) => {
          return [
            ...prevData,
            {
              key: i,
              name: `Edrward ${i}`,
              age: 32,
              address: `London Park no. ${i}`,
            },
          ];
        });
      }
    }, 3000);
  }, []);

  const columns: ColumnsType<DataItem> = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (_, record) => {
        function confirm() {
          Modal.confirm({
            width: 320,
            title: "Delete this user from this project?",
            cancelText: "Cancel",
            closable: true,
            maskClosable: true,
            onOk: () => {
              setData((prevData) =>
                prevData.filter((item) => item.key !== record.key)
              );
            },
          });
        }
        return (
          <Button danger onClick={confirm}>
            Delete
          </Button>
        );
      },
    },
  ];

  const [fixedTop, setFixedTop] = useState<boolean>(false);

  if (data.length < 1) {
    return <Spin className="!block !mx-auto" size="large" />;
  }

  return (
    <AntTable
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500 }}
      summary={(pageData) => (
        <AntTable.Summary fixed={fixedTop ? "top" : "bottom"}>
          <AntTable.Summary.Row>
            <AntTable.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </AntTable.Summary.Cell>
            <AntTable.Summary.Cell index={2} colSpan={8}>
              Scroll Context
            </AntTable.Summary.Cell>
            <AntTable.Summary.Cell index={10}>Fix Right</AntTable.Summary.Cell>
          </AntTable.Summary.Row>
        </AntTable.Summary>
      )}
      sticky
    />
  );
};

export { Table };
