import React, { createContext } from "react";
import "./app.css";
// import webpack from './assets/imgs/Webpack.webp'
import Class from "../src/components/Class";
import Home from "../src/views/Home";

//JSX是什么？
//概念:JSX是JavaScript XML(HTML)的缩写，表示JS代码中书写HTML结构
//作用:React中创建HTML结构(页面UI结构)
//优势:1.采用类似于HTML的语法，降低学习成本，会HTML就会JSX
//2.充分利用JS自身的可编程能力创建HTML结构
//注意：JSX并不是标准的JS语法，是JS的语法扩展，浏览器默认是不识别的，脚手架内置的@babel/plugin-transform-react-jsx包，用来解析该语法

const name = "AshtarteKk"; //识别常规的变量
const getAge = () => {
  //原生js方法的调用
  return 18;
};
let flag = true;
const handleFlag = () => {
  flag = !flag;
};

//react如何完成列表渲染
//技术方案:map 重复渲染的是哪个模板就return谁
//注意事项:遍历列表时同样需要一个类型为number/string不可重复的key 提高diff性能
//key仅仅在内部使用，不会出现在真实的dom结构中
const songs = [
  { id: 1, name: "富士山下" },
  { id: 2, name: "单车" },
  { id: 3, name: "孤勇者" },
];

//有一个状态 type 1 2 3
//1 -> h1
//2 -> h2
//3 -> h3
//原则：模板中的逻辑尽量保持精简
//复杂的多分支的逻辑 收敛为一个函数 通过一个专门的函数来写分支逻辑 模板中只负责调用函数

const getHtag = (type: number) => {
  if (type === 1) return <h1>this is h1</h1>;
  if (type === 2) return <h1>this is h2</h1>;
  if (type === 3) return <h1>this is h3</h1>;
};

//jsx样式控制
//1.行内样式 - 在元素身上绑定一个style属性即可
//2.类名样式 - 在元素身上绑定一个className即可
import "./app.css";
const style = {
  color: "#ccc",
  fontSize: "17px",
};

import Welcome from "./components/Welcome";

function utilFn() {
  console.log("111");
}

function utilFnEvent(e: any) {
  console.log("e=>>", e);
}

const TestComponent = () => {
  interface IList {
    module: string;
    datas: [
      {
        id: number;
        operator: string;
      }
    ];
  }

  interface listProps {
    id: number;
    name: string;
    age: number;
  }
  const list: listProps[] = [
    {
      id: 1001,
      name: "AshtarteKk",
      age: 24,
    },
    {
      id: 1002,
      name: "Tom",
      age: 25,
    },
    {
      id: 1003,
      name: "Amy",
      age: 26,
    },
  ];
  const onDel = (e: any, id: number) => {
    console.log(e, id);
  };
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          myName:{item.name}
          myAge:{item.age}
          <button onClick={(e) => onDel(e, item.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

class CComponent extends React.Component {
  // class Fields
  clickHandler = (e: any, num: number) => {
    // 这里的this指向的是正确的当前的组件实例对象
    // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法
    console.log(this);
  };

  clickHandler1() {
    // 这里的this 不指向当前的组件实例对象  undefined 存在this丢失问题
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.clickHandler(e, 123)}>clickHandler</button>
        <button onClick={this.clickHandler1}>clickHandler1</button>
      </div>
    );
  }
}

import Counter from "./components/State";
import Input from "./components/Input";
import Father from "./components/Father";
import Children from "./components/Children";
import CompC from "./components/CompC";
import ZComp from "./components/ZComp";
import CompE from "./components/CompD";
import Effect from "./components/Effect";
import Dept from "./components/Dept";

const state = {
  message: "this is message",
};

const { Provider, Consumer } = createContext();

const activeFlag = false;

import Hook from "./components/Hook";

function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <br />
      <h2>name:{name}</h2>
      <h2>age:{getAge()}</h2>
      <h2>{flag ? "true" : "false"}</h2>
      <button onClick={handleFlag}>Flag</button>
      <div>getHtag:{getHtag(1)}</div>
      <div>getHtag:{getHtag(2)}</div>
      <div>getHtag:{getHtag(3)}</div>
      <span style={{ color: "red", fontSize: "17px" }}>this is open</span>
      <span style={style}>this is close</span>
      <span className={activeFlag ? "active" : ""}>this is close</span>
      {/* <img src={webpack} alt="" /> */}
      <br />
      <button onClick={utilFn}>Click Me</button>
      <button onClick={utilFnEvent}>Click Me Event</button>
      Counter: <Counter />
      Input: <Input />
      Father: <Father />
      1111111 Children: <Children />
      2222222 CompC: <CompC />
      <Provider value={state.message}>
        ZComp: <ZComp />
      </Provider>
      CompE: <CompE />
      Hook: <Hook />
      Effect: <Effect />
      Dept: <Dept />
      <CComponent />
      <TestComponent />
      <Welcome />
      <Class />
      <Home />
      <div>
        {flag ? (
          <ul>
            {songs.map((song) => (
              <li key={song.id}>
                id:{song.id},name:{song.name}
              </li>
            ))}
            {!flag && <span>this is span</span>}{" "}
            {/* 短路运算 根据前面条件渲染 */}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default App;
