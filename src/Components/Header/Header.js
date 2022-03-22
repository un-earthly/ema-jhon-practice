import React from 'react'
import logo from '../../Assets/images/Logo.svg'
export default function Header() {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/order">Order</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
            </ul>
        </nav>
    )
}
