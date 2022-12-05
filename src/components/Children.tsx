import React from "react";

// class Children extends React.Component{
//     render(){
//         return (
//             <div>子组件 ==>> {this.props.msg}</div>
//         )
//     }
// }

function Children(props: any) {
  function handleToFather() {
    // 调用父组件传递过来的回调函数 并注入参数
    props.changeMsg("子传父的数据");
  }
  return (
    <>
      <div>子组件:1111{props.msg}1111</div>
      <div>2222 {props.msg}2222</div>
      <button onClick={handleToFather}>change</button>
    </>
  );
}

export default Children;
