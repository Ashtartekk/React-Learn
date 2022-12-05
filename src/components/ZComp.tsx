import React from "react";

//APP -> Z -> Y

import YComp from "./YComp";

function ZComp() {
  return (
    <div>
      这是ZComp组件
      <YComp />
    </div>
  );
}

export default ZComp;
