import React, { useState, memo } from "react";

//// Memo组件需要被memo包裹

//memo可以缓存组件，当组件的内容不受修改时，可以不更新该组件。

const Memo = memo(() => {
  console.log("Memo被渲染了");
  return <div>Memo组件</div>;
});

export default Memo;
