import React from "react";
import { useState } from "react";

const Login = ({setStatus}) => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [emailBox, setEmailBox] = useState({
        content: '',
        dot: '',
        at: ''
    });
    const [passwordBox, setPasswordBox] = useState({
        content: '',
        length: ''
    });

    const handleEmailBox = () => {
        setEmailBox({
            content: email !== '' ? '' : 'Please provide a valid email address.',
            dot: email.includes('.') ? '' : 'Please provide a .com',
            at: email.includes('@') ? '' : 'please provide an @'
        })
    }

    const handlePasswordBox = () => {
        setPasswordBox({
            content: password !== '' ? '' : 'Please provide a password.',
            length: password.length < 8 ? 'Password needs to have at least 8 characters.' : ''
        })
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const handleLogin = () => {
        if (emailBox.content === true && emailBox.dot === true) {
            if (emailBox.at == true && passwordBox.content === true) {
                if (passwordBox.length === true) {
                    setStatus({
                        isLoggedin: true
                    })
                }    
            }
        }
    }

    return (
        <div className='login-page'>
            <div className = 'Logo'>
                <img className='Image' src='https://media.git.generalassemb.ly/user/21811/files/546c2880-af58-11ec-917c-d9bd1e9dbecd'></img>
            </div>
            <div className='login-box'>
                <input className = 'email' type='text' name='email' placeholder='Email' value = {email} onBlur = {handleEmailBox} onChange = {handleEmail}/> 
                    {email.content ? <p className='notice'>{email.content}</p> : ""}
                    {email.dot ? <p className='notice'>{email.dot}</p> : ""}
                    {email.at ? <p className='notice'>{email.at}</p> : ""}
                <input className = 'password' type='password' name='password' placeholder='Password' onBlur = {handlePasswordBox} onChange = {handlePassword}/> 
                    {password.content ? <p className='notice'>{password.content}</p> : ""}
                    {password.length ? <p className='notice'>{password.length}</p> : ""}
                <button type='submit' value='Submit' onClick={handleLogin}>Log In</button>
            </div>
      </div>
    )
}

export default Login;