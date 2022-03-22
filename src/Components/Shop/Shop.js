import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Product from './Product';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const cartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shopContainer'>
            <div className="products">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handler={cartHandler}
                        />
                    )
                }
            </div>
            <Cart cart={cart} />
        </div>
    )
}
