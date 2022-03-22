import React from 'react'

export default function Cart({cart}) {
    return (
        <div className="cart">
            <h1>Order Summery</h1>
            <p>Items In Cart:{cart.length}</p>

        </div>
    )
}
