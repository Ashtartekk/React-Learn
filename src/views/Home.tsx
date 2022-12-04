import React, { PureComponent } from "react";
import Hello from '../components/Hello'
import Login from './Login/login'

class Class extends PureComponent {

  render() {
    return (
      <>
       <div>
       <Hello name={"Hello!"}/>
       <Login/>
       </div>
      </>
    )
  }
}

export default Class