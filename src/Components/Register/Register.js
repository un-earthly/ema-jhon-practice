import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='login__container'>
            <h1>Register</h1>

            <form onSubmit=''>
                <div className="input__field">
                    <label htmlFor="email">Name</label>
                    <input type="email" placeholder='email@email.com' id="email" required />
                </div>
                <div className="input__field">
                    <label htmlFor="pass" >Password</label>
                    <input type="password" placeholder='PassWord' id="pass" required />
                </div>
                <div className="input__field">
                    <label htmlFor="pass-conf" >Password</label>
                    <input type="password" placeholder='PassWord' id="pass-conf" required />
                </div>

                <button className="btn">Login</button>
                <small>
                    Already have an account? <Link to='/login' className='orange'>Login</Link>
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
