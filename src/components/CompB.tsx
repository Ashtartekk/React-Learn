import React from 'react'

//子组件B

function CompB(props:any){
    return(
        <div>
            CompB:
            <button onClick={()=>props.changeMsg('new message')}>ChangeMsg</button>
        </div>
    )
}

export default CompB