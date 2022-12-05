import React from 'react'


interface stateProps{
    count:number;
    name?:string;
    age?:number;
    bool?:boolean
}

class Counter extends React.Component{
    //初始化状态
    state:stateProps = {
        count : 0,
        name:'Tom',
        age:18,
        bool:false
    }
    handleAdd = ()=>{
        this.setState({
            count:this.state.count+1,
            name:this.state.name = 'AshtarteKk',
            age:this.state.age = 24,
            bool:this.state.bool = true
        })
        console.log(this.state.bool)
    }
    render (){
        return (
            <>
              <button onClick={this.handleAdd}>change</button>
              <p>{this.state.count}</p>
              <p>{this.state.name}</p>
              <p>{this.state.age}</p>
            </>
        )
    }
}

export default Counter