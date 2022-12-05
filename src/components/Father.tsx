import React from 'react'
import Children from './Children'

class Father extends React.Component{
    state = {
        Name:'AshtarteKk',
        Age:24,
        GetMsg:'111'
    }
    changeMessage = (newMsg:string) => {
        console.log('子组件传过来的数据:',newMsg)
        this.setState({
            GetMsg: newMsg
        })
      }
    render(){
        return(
            <div>
                <p>父组件</p>
                {/* <Children msg={this.state.Name} />
                <Children msg={this.state.Age} /> */}
                <Children msg={this.state.GetMsg} changeMsg={this.changeMessage} />
                <div>GetMsg:{this.state.GetMsg}</div>
            </div>
        )
    }
}

export default Father

