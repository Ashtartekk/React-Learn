import React from "react";

//什么是Hooks -> 一套能够使组件更强大，更灵活的"钩子"

//注意 ：有了hooks后，不能把函数称为无状态组件了，因为hooks为函数提供了状态
//hoos只能在函数组件中使用

//useState

//使用步骤 1.导入useState函数
//2.调用useState函数，并传入状态的初始值
//3.从useState函数的返回值中，拿到状态和修改状态的方法
//4.在JSX中展示状态
//5.调用修改状态方法更新状态

//2.  useState 注意事项
// a.  只能出现在函数组件或者其他hook函数中
// b.  不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook）

import { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([1, 2, 3]);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setName("AshtarteKk");
        }}
      >
        {name}
      </button>
      <button
        onClick={() => {
          setList([4, 5, 6]);
        }}
      >
        {list}
      </button>
    </>
  );
};

export default Hook;
