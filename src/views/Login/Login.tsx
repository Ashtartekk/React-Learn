import React, { PureComponent } from "react";
import styles from './login.less'

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
class Login extends PureComponent {
  render() {
    return (
        <>
        <span>用户名:</span><input type="text" />
        <br />
        <span>密码:</span><input type="text" />
        <br />
        <button onClick={handleClick}>登录</button>
    
      </>
    )
  }
}

export default Login