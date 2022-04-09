import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Login() {
    return (
        <div className='login__container'>
            <h1>Login</h1>

            <form onSubmit=''>
                <div className="input__field">
                    <label htmlFor="email">Name</label>
                    <input type="email" placeholder='email@email.com' id="email" />
                </div>
                <div className="input__field">
                    <label htmlFor="pass" >Password</label>
                    <input type="password" placeholder='PassWord' id="pass" />
                </div>

            <buttonr>Login</buttonr>
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
                <button><i class="bi bi-google"></i> Continue with Google</button>
            </div>
        </div>
    )
}
