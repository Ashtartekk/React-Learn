import React, { createRef } from 'react'

class Input extends React.Component {
     // 使用createRef产生一个存放dom的对象容器
     msgRef:any = createRef()
     changeHandle = ()=>{
        console.log(this.msgRef.current.value)
     }
     
     render(){
        return (
            <>
            <input type="text" ref={this.msgRef} />
                <button onClick={this.changeHandle}>Ref Click</button>
            </>
        )
     }
}

export default Input