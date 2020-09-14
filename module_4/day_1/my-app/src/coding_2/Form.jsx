import React from 'react'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            company_name:"",
            title:"",
            salary:"",
            location:"Bangalore",
            Remote:false,
        }
    }

    render(){
        const {onSubmit} = this.props
        return(
            <>
            <form onSubmit={onSubmit}>{this.props.children}</form>
                
            </>
        )
    }

}
export default Form