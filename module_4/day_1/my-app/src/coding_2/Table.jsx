import React from 'react'
import TableItem from './TableItem'

class Table extends React.Component{

    constructor(props){
        super(props)
        this.state={
            filter:"default",
            sort:null
        }
    }

    handleFilterChange=(e)=>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    
    render(){
        const {data} = this.props
        const {filter,sort} = this.state
        return(
            <>

                <div style={{margin:"20px"}}>
                    <label style={{marginRight:"20px"}}>Sort by</label>
                    <select value={sort} name="sort" onChange={this.handleFilterChange}>
                        {["default","asc","dsc"].map(item=>
                            <option value={item} key={item}>{item}</option>
                            )}
                    </select>
                </div>

                <div style={{margin:"20px"}}>
                    <label style={{marginRight:"20px"}}>filter </label>
                    <select value={filter} name="filter" onChange={this.handleFilterChange}>
                        {["default","Bangalore","Chennai","Delhi"].map(item=>
                            <option value={item} key={item}>{item}</option>
                            )}
                    </select>
                </div>

                {/* Creating filter and sort functionality*/}
                <div>
                    {data?.filter(item=>{
                        if(filter === "default"){
                            return true
                        }
                        return filter === item.location
                    })
                    .sort((a,b)=>{
                        if(sort === null){
                            return 0
                        }
                        if(sort === "asc"){
                            return a.salary-b.salary
                        }
                        if(sort === "dsc"){
                            return b.salary-a.salary
                        }
                    })
                    .map((item)=>(
                        <TableItem key={item.id} {...item}/>
                    ))}
                </div>
                
            </>
        )
    }
    
}

export default Table