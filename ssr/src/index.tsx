import React from "react";

import App from "@App/App";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
