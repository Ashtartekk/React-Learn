import React, { PureComponent } from "react";

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.name = 'AshtarteKk'
  Target.prototype.age = 24
}
// 使用装饰圈
@addAge
class Class extends PureComponent {

  age?: number

  render() {
    return (
      <>
      <h2>Name:{this.age}</h2>
      <h2>Age:{this.age}</h2>
      </>
    )
  }
}

export default Class