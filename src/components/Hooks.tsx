import React, { useState } from "react";

//Hook进阶

function Hooks() {
  const [number, setNumber] = useState(() => {
    //这里写计算逻辑 return '计算之后的初始值' 相当于计算属性
    return 1 + 5;
  });
  return (
    <>
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 5);
        }}
      >
        setNumber
      </button>
    </>
  );
}

export default Hooks;
