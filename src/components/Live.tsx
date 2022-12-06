import React from "react";

//生命周期

//组件的生命周期是指从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程，注意，只有
//类组件才有生命周期(类组件 实例化 函数组件 不需要实例化)

//生命周期 - 挂载阶段

//constructor -> render -> componentDidMount

//constructor  创建组件时，最先执行，初始化的时候只执行一次
//render     每次组件渲染都会触发
//componentDidMount   组件挂载（完成DOM渲染）后执行，初始化的时候执行一次

//生命周期 更新阶段

//render -> componentDidUpdate

//rendr 每次组件渲染都会触发

//componentDidUpdate  组件更新后（DOM渲染完毕）

//生命周期 - 卸载阶段

//componentWillUnmount  组件卸载（从页面中消失）
