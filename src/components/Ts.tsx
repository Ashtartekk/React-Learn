import React from "react";

interface T1 {
  name: string;
}
interface T2 {
  age: number;
}
type T3 = T2 & T1; //交叉类型

//函数组件
const Type = () => {
  const info: T3 = {
    name: "AshtarteKk",
    age: 24,
  };
  console.log("Type=>>", Type);
  return (
    <>
      <div>TypeComponent:{info.name}</div>
      <div>TypeComponent:{info.age}</div>
    </>
  );
};

class Ts extends React.Component {
  info: T3 = {
    name: "AshtarteKk",
    age: 24,
  };
  render() {
    return (
      <>
        Type:
        <Type />
        <div>T3Component:{this.info.name}</div>
        <div>T3Component:{this.info.age}</div>
      </>
    );
  }
}

export default Ts;
