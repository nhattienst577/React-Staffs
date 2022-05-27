import React from "react";
import "antd/dist/antd.min.css";
import "../App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { DatePicker } from "antd";
import Record from "./Record";

const { Header, Content, Footer } = Layout;

function AppStaff() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Main Dashboard</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <DatePicker /> */}
          <Record />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design Â© Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default AppStaff;
