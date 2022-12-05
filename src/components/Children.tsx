import React from 'react'

// class Children extends React.Component{
//     render(){
//         return (
//             <div>子组件 ==>> {this.props.msg}</div>
//         )
//     }
// }

function Children(props:any){
    console.log(props.msg)
    return (
        <div>子组件:1111{props.msg}1111</div>
    )
}

export default Children