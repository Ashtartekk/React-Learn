import { useWindowsScroll } from "../hook/ScrollHook";
import { useLocalStorage } from "../hook/StorageHook";
import React from "react";

const Dept = () => {
  const [y] = useWindowsScroll();
  const [message, setMessage] = useLocalStorage("name", "456");
  return (
    <>
      <span>Y = {y}</span>
      <button
        onClick={() => {
          setMessage("AshtarteKk");
        }}
      >
        setMessage
      </button>
      <div>{message}</div>
    </>
  );
};

export default Dept;
