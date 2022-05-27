import "antd/dist/antd.min.js";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Record() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingStaff, setUpdatingStaff] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Name1",
      age: 18,
      email: "name1@gmail.com",
      address: "name1 address",
    },
    {
      id: 2,
      name: "Name2",
      age: 18,
      email: "name2@gmail.com",
      address: "name2 address",
    },
    {
      id: 3,
      name: "Name3",
      age: 18,
      email: "name3@gmail.com",
      address: "name3 address",
    },
    {
      id: 4,
      name: "Name4",
      age: 18,
      email: "name4@gmail.com",
      address: "name4 address",
    },
    {
      id: 5,
      name: "Name5",
      age: 18,
      email: "name5@gmail.com",
      address: "name5 address",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Age",
      dataIndex: "age",
    },
    {
      key: "4",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "5",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "6",
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onUpdateStaff(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStaff(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onUpdateStaff = (record) => {
    setIsUpdating(true);
    setUpdatingStaff({ ...record });
  };

  const resetUpdating = () => {
    setIsUpdating(false);
    setUpdatingStaff(null);
  };

  const onDeleteStaff = (record) => {
    Modal.confirm({
      title: "Are you sure",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((staff) => staff.id !== record.id);
        });
      },
    });
  };

  const onAddStaff = () => {
    const randomNumber = parseInt(Math.random() * 100);
    const newStaff = {
      id: randomNumber,
      name: "Name",
      age: randomNumber,
      email: "Name@gmail.com",
      address: "Address",
    };
    setDataSource((pre) => {
      return [...pre, newStaff];
    });
  };

  return (
    <div className="container">
      <div className="app">
        <Button onClick={onAddStaff}>Add Staff</Button>
        <Table columns={columns} dataSource={dataSource}></Table>

        <Modal
          title="Edit Staff"
          visible={isUpdating}
          okText="Save"
          onCancel={() => {
            resetUpdating();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((staff) => {
                if (staff.id === updatingStaff.id) {
                  return updatingStaff;
                } else {
                  return staff;
                }
              });
            });
            resetUpdating();
          }}
        >
          <div style={{ fontWeight: "bold" }}>Name</div>
          <Input
            value={updatingStaff?.name}
            onChange={(event) => {
              setUpdatingStaff((pre) => {
                return { ...pre, name: event.target.value };
              });
            }}
          />
          <div style={{ fontWeight: "bold" }}>Age</div>
          <Input
            value={updatingStaff?.age}
            onChange={(event) => {
              setUpdatingStaff((pre) => {
                return { ...pre, age: event.target.value };
              });
            }}
          />
          <div style={{ fontWeight: "bold" }}>Email</div>
          <Input
            value={updatingStaff?.email}
            onChange={(event) => {
              setUpdatingStaff((pre) => {
                return { ...pre, email: event.target.value };
              });
            }}
          />
          <div style={{ fontWeight: "bold" }}>Address</div>
          <Input
            value={updatingStaff?.address}
            onChange={(event) => {
              setUpdatingStaff((pre) => {
                return { ...pre, address: event.target.value };
              });
            }}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Record;
