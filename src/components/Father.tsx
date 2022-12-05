import React from 'react'
import Children from './Children'

class Father extends React.Component{
    state = {
        Name:'AshtarteKk',
        Age:24
    }
    render(){
        return(
            <div>
                <p>父组件</p>
                <Children msg={this.state.Name} />
                <Children msg={this.state.Age} />
            </div>
        )
    }
}

export default Father