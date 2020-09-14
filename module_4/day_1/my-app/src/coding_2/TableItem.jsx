import React from 'react'


export default function TableItem(props){
    
    const data = Object.keys(props).map((item)=>{
        if(item === "Remote"){
            return (
                <div style={{padding:10}} key={item}>

                    {props[item]?"Remote":"not Remote"}
                    <input type="radio" />

                </div>
            )
        }
        
        return (
            <div style={{padding:10}} key={item}>{props[item]}</div>
        )
        
    });
    
        return(
            <>
            
                <div style={{display:"flex",padding:10,border:"1px solid black",margin:"10px",backgroundColor:"pink"}}>
                    {data}
                    
                </div>
            
            </>
        )
}