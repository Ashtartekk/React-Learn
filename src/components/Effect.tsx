import React from "react";

//useEffect 理解副作用函数

//副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用
//队伍React组件来说，主作用就是根据数据(state/props)渲染UI，除此之外都是副作用(比如，手动修改DOM)

//常见的副作用 : 数据请求ajax发送
//手动修改dom
//localstorage操作

//使用步骤
//1.导入useEffect函数
//2.调用useEffect函数，并传入回调函数
//3.在回调函数中编写副作用处理(dom操作)
//4.修改数据状态
//5.检验副作用是否生效

//依赖项控制执行时机
//组件首先渲染执行一次，以及不管哪个撞他更改引起组件更新都会重新执行
//1.组件初始渲染 2.组件更新(不管哪个状态引起的更新)
//useEffect(())=>{console.log('副作用执行了')})

//添加空数组 组件只在首次渲染时执行
//useEffect(()=>{console.log('副作用执行了')},[])

//添加特定依赖项 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
//useEffect(()=>{console.log('副作用执行了')},[count])
//注意事项
// useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现

//清理副作用 如果想清理副作用 可以在副作用末尾加一个return 在新的函数编写清理副作用的逻辑
//执行时机为=>>组件卸载时自动执行 组件更新时，下一个useEffect副作用函数执行之前执行

//useEffect(()=>{ const timerId = setInterval(()=>{setCount(count + 1)},1000)return()=>{
//     clearInterval(timerId)
// } },[count])

import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //操作DOM
    document.title = `当前已经点击了${count}次`;
    console.log(1111);
  });
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    ></button>
  );
}

export default Effect;
