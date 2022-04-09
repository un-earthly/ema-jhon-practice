import React from 'react'

export default function Product({ product, deleteHandler }) {
    return (
        <div className="cart__product">
            <div className="info">
                <img src={product.img} height='91' width='91' style={{ borderRadius: '6px' }} alt="" />
                <div className="info__details">
                    <h6>{product.name.length > 30 ? product.name.slice(0, 30) + '...' : product.name}</h6>
                    <p>Price : ${product.price}</p>
                    <p>Shipping Info: ${product.shipping}</p>
                </div>
            </div>
            <button onClick={() => deleteHandler(product)} className="trash">
                <i className="bi bi-trash"></i>
            </button>
        </div>
    )
}
