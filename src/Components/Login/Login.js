import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

import { auth } from '../../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div className='login__container'>
            <h1>Login</h1>

            <form onSubmit={e => e.preventDefault()}>
                <div className="input__field">
                    <label htmlFor="email">Name</label>
                    <input type="email"
                        onBlur={(e) => setEmail(e.target.value)}
                        placeholder='email@email.com' id="email" />
                </div>
                <div className="input__field">
                    <label htmlFor="pass" >Password</label>
                    <input type="password"
                        onBlur={(e) => setPassword(e.target.value)}
                        placeholder='PassWord' id="pass" />
                </div>

                <div>
                    {
                        error && <p style={{ color: 'red' }}>Error: {error.message}</p>
                    }
                </div>
                <button onClick={() => signInWithEmailAndPassword(email, password)}>
                    Login</button>
                <small>
                    New to Ema-john? <Link to='/register' className='orange'>Create New Account</Link>
                </small>
            </form>


            <div className="or__section">
                <div className="or">

                    <span className='horizontal__bar'></span>
                    <h5>or</h5>
                    <span className='horizontal__bar'></span>

                </div>
                <button onClick={() => signInWithGoogle()}><i className="bi bi-google"></i> Continue with Google</button>
            </div>
        </div >
    )
}
