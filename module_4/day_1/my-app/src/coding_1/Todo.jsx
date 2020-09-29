import React from 'react'

const Todo = ({data}) =>{

    console.log(data)
    return(
        <div style={{border:"1px solid black",margin:"auto",display:"flex",width:"600px"}}>
            <div style={{flex:1}}>{data.id}</div>
            <div style={{flex:1}}>{data.title}</div>
        </div>
    )
}

export default Todo