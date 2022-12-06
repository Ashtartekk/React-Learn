import React, { useEffect, useRef } from "react";

//获取DOM

function UseRef() {
  const h1Ref = useRef(null);
  useEffect(() => {
    console.log(h1Ref);
  }, []);
  return (
    <div>
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  );
}

export default UseRef;
