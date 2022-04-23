import React from 'react'

export default function Product(props) {
    const { id, img, category, name, price, ratings, ratingsCount, seller, shipping, stock } = props.product
    return (
        <div className="product">
            <div className="productBody">
                <img src={img} width="286" height="286" alt="" />
                <h6>{name}</h6>
                <p>By: {seller}</p>
                <p>for: ${price}</p>
                <p>With A Rating Of: {ratings}</p>
            </div>
            <button onClick={() => props.handler(props.product)} className="productFooter">
                <p>Add To Cart <i class="bi bi-cart"></i></p>
            </button>
        </div>
    )
}
