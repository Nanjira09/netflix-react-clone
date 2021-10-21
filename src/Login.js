import React from 'react'
import {useState} from "react";
import './Login.css'
import Signup from './Signup'

function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login">
            <div className="nav">
                <img className="nav-logo" src="https://pngimg.com/uploads/netflix/netflix_PNG26.png" alt="" />
                <button onClick={()=>setSignIn(true)} className="nav-btn">Sign in</button>
            </div>
            <div className="main">
                {signIn ? ( <Signup />): (
                    <div className="container">
                        <h1>Unlimited movies, Tv shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                        <div className="email-input">
                            <input type="text" placeholder="Email address" />
                            <button onClick={()=>setSignIn(true)} className="btn-search">Get started</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
