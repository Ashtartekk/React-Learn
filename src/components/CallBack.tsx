import React, { useState, memo, useCallback } from "react";

interface ISubProps {
  changeNum: () => void;
}

// Sub组件需要被memo包裹
const Sub = memo((props: ISubProps) => {
  console.log("Sub被渲染了");
  return (
    <>
      <button onClick={props.changeNum}>累加num</button>
      <h3>Sub组件</h3>
    </>
  );
});

//useMemo与useCallback大致相同，只是useMemo需要在回调函数中再返回一个函数，我们称之为高阶函数：

export default function App2() {
  const [num, setNum] = useState<number>(0);

  // 将这个changeNum函数使用useCallback包裹一次
  const changeNum = useCallback(() => {
    setNum((num) => num + 1);
  }, []);

  return (
    <div>
      <h2>num的值：{num}</h2>
      <Sub changeNum={changeNum} />
    </div>
  );
}
