import React from 'react'
import Form from './Form'
import Table from './Table'


class FormWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            company_name:"",
            title:"",
            salary:"",
            location:"Bangalore",
            Remote:false,
            created_Date:"",
            data:[],
            //file:null
        }
    }

    onChange = e =>{
        const {name,type,value,checked} = e.target
        const val = type === "checkbox"?checked: value
        this.setState({
            [name]:val
        });
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {data, ...formstate} = this.state
        const newData = [...data, {...formstate}]
        let n = new Date()
        this.setState({
            data:newData,
            created_Date:n.toDateString(),
            
        })
    }

    render(){
        const {data, ...formstate} = this.state
        console.log(formstate)
        return(
            <>
            <div style={{border:"1px solid black",padding:"20px"}}>
                <div style={{border:"1px solid black", width:"500px",height:"400px",margin:"auto",backgroundColor:"pink"}}>

                    <h2>ADD A NEW JOB</h2>
                    {/* Adding form component */}
                    <Form onSubmit={this.handleSubmit}>
                        <div>

                            <div style={{margin:"20px"}}>
                                <label style={{marginRight:"20px"}}>Title:</label>
                                <input onChange={this.onChange} name="title" value={data.title} />
                            </div>

                            <div style={{margin:"20px"}}>
                                <label style={{marginRight:"30px"}}>Salary:</label>
                                <input onChange={this.onChange} name="salary" value={data.salary}/>
                            </div>

                            <div style={{margin:"20px"}}>
                                <label style={{marginRight:"20px"}}>Company name:</label>
                                <input onChange={this.onChange} name="company_name" value={data.company_name}/>
                            </div>

                            <div style={{margin:"20px"}}>
                                <label style={{marginRight:"20px"}}>Location:</label>
                                <select onChange={this.onChange} name="location" value={data.location}>
                                    {
                                        ["Bangalore",
                                        "Chennai",
                                        "Delhi"].map((item)=>
                                        (<option key={item} value={item}>{item}</option>)
                                        )
                                    }
                                </select>
                            </div>
                            
                            <div style={{margin:"20px"}}>
                                <label style={{marginRight:"20px"}}>Remote:</label>
                                <input type="checkbox" onChange={this.onChange} name="Remote" value={data.Remote}/>
                            </div>

                            <div style={{margin:"20px"}}>
                                <input type="file" />
                            </div>

                            <div style={{margin:"20px"}}>
                                <input type="submit" value="ADD" />
                            </div>

                        </div>
                    </Form>
                </div>
                
                {/* Rendering table component */}
                <div style={{border:"1px solid black",padding:"20px",backgroundColor:"#32CD32"}}>
                    <Table data={data} />
                </div>
            </div>
            </>
        )
    }

}
export default FormWrapper