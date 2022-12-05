import React from 'react'

function utilFn(){
    const handleClick = ()=>{
        console.log('11')
    }
    return (
        <button onClick={handleClick}></button>
    )
}

export default utilFn