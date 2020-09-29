import React from 'react'
import axios from 'axios'
import Todo from './Todo'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
            datas:[],
            token:""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {password,email} =this.state
        console.log(password,email)
        var body = {
            password:password,
            email:email,
        }
        
        axios({
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: body
        })
        .then((response)=> {
            console.log(response);
            this.setState({
                token:response.data.token
            })
            console.log(response);
        })
        .catch( (error) =>{
            console.log(error);
        });
        

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos',
            
        })
        .then((response)=> {
            console.log(response.data);
            this.setState({
                datas:response.data
            })
        })
        .catch( (error) =>{
            console.log(error);
        });
        
        // console.log(this.data.item)
        //console.log(e)
        console.log(this.state.datas)
        
    }
    

    handleChange = (e) => {
        const {name,value} = e.target
        
        this.setState({
            [name]:value
        });
        //console.log(password,email)
        
    }

    render(){
        console.log(this.state.token)
        console.log(this.state.datas)
        const {datas} = this.state
        return(
            <>
            
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
        
            </div>
            <div style={{border:"1px solid black",margin:"auto",width:"600px"}}>{this.state.email}</div>
            <div style={{border:"1px solid black",margin:"auto",width:"600px"}}>
            {this.state.token}
            </div>

            <div style={{margin:"10px"}}>
                {datas.map((item)=><Todo data={item} key={item.id} />)}
            </div>
            </>
        )
    }
}


export default Form