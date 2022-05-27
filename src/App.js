import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import AppHome from "./view/home";
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
