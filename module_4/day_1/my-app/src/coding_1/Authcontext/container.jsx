import React from 'react'
import {AuthContext} from './Authcontext'

class Container extends React.Component{

    render(){
        const {isAuth,toggleAuth} = this.context
        return(
            <>
                <button onClick={toggleAuth} >{isAuth?"Log out":"Log in"}</button>
            </>
        )
    }
}
Container.contextType = AuthContext

export default Container
