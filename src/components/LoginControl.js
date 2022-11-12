import React from "react";
import {useState} from "react";
import Login from "./Login";
import Main from "./Main";

const LoginControl = () => {

    const [status, setStatus] = useState({
        isLoggedIn: false
    })


    return (
        <div>
            {status.isLoggedIn ? <Main setStatus = {setStatus}/> : <Login setStatus = {setStatus}/>}
        </div>
    )
}

export default LoginControl;