import React from "react";
// 路由有两种模式：
// 一种是HashRouter，带有#，
// 一种是BrowserRouter，不带#，但需要后端支持修改根目录地址
// 开发阶段可以先使用BrowserRouter
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import RouterComp from "../components/RouterComp";
import Detail from "../components/Detail";

// 定义一个纯路由组件
const BasicRoute = () => {
  return (
    <Router history={useHistory}>
      {/* 套用Switch作路由匹配 */}
      <Switch>
        <Route exact path="/RouterComp" component={RouterComp}></Route>
        <Route exact path="/detail" component={Detail}></Route>
      </Switch>
    </Router>
  );
};

export default BasicRoute;
