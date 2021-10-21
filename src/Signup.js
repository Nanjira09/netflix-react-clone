import React, { useState, useRef} from 'react'
import './Signup.css'
import {auth} from './Firebase'

function Signup() {
    const [signUp, setSignUp] = useState(false);
    const email = useRef('');
    const password = useRef('');
    const register = (e)=> {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email.current.value, password.current.value).then(
            user=> {}
        ).catch(err =>alert(err.message))
    }
    const signIn = ()=> {
        auth.signInWithEmailAndPassword(email.current.value, password.current.value).then(
            user=>{}
        ).catch(err =>alert(err.message))
    }
    return (
        <div className="signup">
            <h2>{signUp ? "Sign Up" : "Sign In"}</h2>
            <input ref={email} className="in-email" type="email" placeholder="Email or phone number" />
            <input ref={password} className="in-password" type="password" placeholder="Password" />
            <button className="signin-btn" onClick={signUp ? register : signIn}>{signUp ? "Sign Up" : "Sign In"}</button>
            <p><span className="p-span">New to Netflix?</span> 
            <span className="btn-span" onClick={()=> setSignUp(true)}>Sign Up now.</span></p>
        </div>
    )
}

export default Signup
