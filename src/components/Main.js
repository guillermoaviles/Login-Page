import React from "react";

const Main = ({setState}) => {

    const handleLogout = () => {
        setState({
            isLoggedIn: false
        })
    }

    return (
        <div>
            <button onClick={handleLogout}/>
        </div>
    )
}

export default Main;