import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/Logo.svg'
import { auth } from "../../firebase.init"


export default function Header() {

    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
    };
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <ul>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/overview">Order Review</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
                <li>{
                    user ?
                        <button onClick={logout}>Logout</button>

                        :
                        <Link to="/login">Login</Link>
                }</li>
            </ul>
        </nav>
    )
}
