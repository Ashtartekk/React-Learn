import React, { createContext } from "react";

const { Consumer } = createContext();

function YComp() {
  return <Consumer>{(value) => <span>{value}</span>}</Consumer>;
}

export default YComp;
