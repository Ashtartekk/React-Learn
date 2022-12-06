import { useWindowsScroll } from "../hook/ScrollHook";
import React from "react";

const Dept = () => {
  const [y] = useWindowsScroll();
  return (
    <>
      <span>Y = {y}</span>
    </>
  );
};

export default Dept;
