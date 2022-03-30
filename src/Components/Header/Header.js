import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/Logo.svg'
export default function Header() {
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <ul>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/overeview">Order Review</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
            </ul>
        </nav>
    )
}
