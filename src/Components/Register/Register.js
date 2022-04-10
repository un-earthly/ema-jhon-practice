import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.init';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    return (


        <div className='login__container'>
            <h1>Register</h1>

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
                <div className="input__field">
                    <label htmlFor="pass-conf" >Password</label>
                    <input type="password" placeholder='PassWord' id="pass-conf" required />
                </div>
                <div>
                    {
                        error && <p style={{ color: 'red' }}>Error: {error.message}</p>
                    }
                </div>
                <button onClick={() => createUserWithEmailAndPassword(email, password)}>
                    Register</button>
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
