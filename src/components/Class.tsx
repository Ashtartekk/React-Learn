import React, { PureComponent } from "react";

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.name = 'AshtarteKk'
  Target.prototype.age = 24
  Target.prototype.obj = {name:'Ash',age:24}
}
const handleClick = ()=>{
  console.log(111)
}
// 使用装饰圈
@addAge
class Class extends PureComponent {
  name?:string
  age?: number
  obj?:{
    name:string,
    age:number
  }
  render() {
    return (
      <>
      <h2>Name:{this.name}</h2>
      <h2>Age:{this.age}</h2>
      <div>object.name:{this.obj?.name}</div>
      <div onClick={handleClick()}>object.age:{this.obj?.age}</div>
      </>
    )
  }
}

export default Class