import React from 'react'

export const AuthContext = React.createContext()

class AuthContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isAuth:false
        }
    }

    toggleAuth=()=>{
        this.setState({
            isAuth:!this.state.isAuth
        })
    }
    render(){
        const {isAuth} = this.state
        const {toggleAuth} = this
        return(
            
                <AuthContext.Provider value={{isAuth,toggleAuth}} >
                    {this.props.children}
                </AuthContext.Provider>
            
        )
    }
    
}

export default AuthContextProvider
