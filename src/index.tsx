import React from "react"; //React:框架核心包
import { createRoot } from "react-dom/client"; //ReactDOM:专门做渲染相关的包
import App from "./App"; //引入根组件
import "./app.less"; //应用全局样式文件

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_ENV", process.env.BASE_ENV);

//渲染跟组件APP 到 一个id为root的dom节点上

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    //<React.StrictMode></React.StrictMode> 这个是React的严格模式节点
    //useEffect的执行时机
    <App />
  );
}
