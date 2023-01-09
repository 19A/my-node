import React from "react";
import { Provider } from "mobx-react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, notification } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import globalStore from "./store/index";
import { routers } from "./routers/index";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
// // 根据路由配置生成路由
// const routerGenerator = () =>
//   routers.map(({ component, path, ...other }) => {
//     const Routes = component.then(function (raw) {
//       var Component = raw.default || raw;
//       return <Route component={Component} path={path} {...other}></Route>;
//     });
//     return <Routes />;
//   });

// 全局配置
const globalConfig = {
  locale, // 本地化语言
  thmee: {
    // 主题
    token: {
      colorPrimary: "#00b96b"
    }
  }
};
// -- 提醒框
notification.config({
  placement: "bottomRight",
  bottom: 30,
  duration: 3,
  rtl: false // 一种阅读模式 right to left
});

const App = (app) => {
  // console.log("app", app);
  return (
    <Switch>
      {routers.map(({ component, path, ...other }) => {
        return (
          <Route
            key={path}
            component={component}
            path={path}
            {...other}
          ></Route>
        );
      })}
    </Switch>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={globalStore}>
      <ConfigProvider {...globalConfig}>
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
