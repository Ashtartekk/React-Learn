import React, { PureComponent } from "react";
import Hello from '../components/Hello'

class Class extends PureComponent {

  render() {
    return (
      <>
       <div>
       <Hello name={"Hello wrold!"}/>
       </div>
      </>
    )
  }
}

export default Class