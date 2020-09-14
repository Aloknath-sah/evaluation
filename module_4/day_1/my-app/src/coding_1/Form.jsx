import React from 'react'
import axios from 'axios'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
            data:[],
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {password,email} =this.state
        let item={
            password:password,
            email:email,
        }
        this.setState({
            data:[...this.state.data,item]
        })

        console.log(password,email)
        
        axios.post("https://reqres.in/api/register")
        .then( (res)=>console.log(res))
        
        .catch(err=>console.error(err))
        
        // console.log(this.data.item)
        
        //console.log(e)
        
    }

    handleChange = (e) => {
        const {name,value} = e.target
        
        this.setState({
            [name]:value
        });
        //console.log(password,email)
        
    }

    // handleAddToData=(index)=>{
    //     this.setState({
    //         data:[...this.state.data,item]
    //     })
    // }
    // handleButton=(e)=>{
    //     console.log(e.target.parentElement)
    //     let del = e.target.parentElement
    //     del.remove()

    // }

    render(){
        
        return(
            <div style={{height:"200px",width:"300px",border:"1px solid black",margin:"auto"}}>
                <h3>Login/Register</h3>
            <form onSubmit={this.handleSubmit} >
                
                <div style={{margin:"20px"}}>
                    <label>
                    Email:
                    <input
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.name}
                    />
                    </label>
                </div>

                <div style={{margin:"20px"}}>
                    <label>
                    Password:
                    <input
                        onChange={this.handleChange}
                        name="password"
                        value={this.state.name}
                    />
                    </label>
                </div>
                <div>
                    <input
                        type="submit" value="LOGIN/REGISTER"
                    />
                </div>
            </form>
            {/* <div>{this.state.data.map((item) =>(
                <div key={uuidv4()} style={{display:"flex"}}>
                    <h3 style={{margin:"20px"}}>{item.password}</h3>
                    <h3 style={{margin:"20px"}}>{item.email}</h3>
                    <button onClick={this.handleButton}>delete</button>
                </div>
            ))}
            </div> */}
            </div>
        )
    }
}


export default Form