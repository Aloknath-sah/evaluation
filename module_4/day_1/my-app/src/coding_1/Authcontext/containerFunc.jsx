import React from 'react'
import {AuthContext} from './Authcontext'

function ContainerFunc() {

        return(
            <>
                <AuthContext.Consumer>
                    {
                        value=>{
                            return(
                                <div>
                                {value.isAuth?"user is logged in":"user is logged out"}
                                </div>
                            )
                        }
                    }
                </AuthContext.Consumer>
            </>
        )
    
}


export default ContainerFunc
