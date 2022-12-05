import React from 'react'
import CompA from './CompA'
import CompB from './CompB'

class CompC extends React.Component {
    //父组件提供状态数据
    state = {
        message:'this is message'
    }
    changeMsg = (newmsg:string) =>{
        this.setState({
            message:newmsg
        })
    }
    render(){
        return(
            <div>
            {/* 接收数据的组件 */}
            <CompA msg={this.state.message}></CompA>
            {/* 修改数据的组件 */}
            <CompB changeMsg={this.changeMsg}></CompB>
            </div>
        )
    }
}

export default CompC