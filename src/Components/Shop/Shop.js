import React, { useEffect, useState } from 'react'
import { addToDb, getStoragItem } from '../../utilities/fakedb';
import useProduct from '../../customHooks/useProduct';
import Cart from '../Cart/Cart';
import Product from './Product';
import { Link } from 'react-router-dom';

export default function Shop() {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getProducts = getStoragItem();
        const savedProducts = [];
        for (const id in getProducts) {
            const storageProduct = products.find((product) => product.id === id)
            if (storageProduct) {
                const quantity = getProducts[id]
                storageProduct.quantity = quantity;
                savedProducts.push(storageProduct)
            }
        }
        setCart(savedProducts)
    }, [products])
    const cartHandler = (product) => {
        const exist = cart.find(pd => product.id === pd.id)
        let newCart = [];
        if (!exist) {
            product.quantity = 1;
            newCart.push(...cart, product)
        }
        else {
            const rest = cart.filter(pd => pd.id !== product.id)
            exist.quantity = exist.quantity + 1;
            console.log(exist)
            newCart = [...rest, exist]
        }

        setCart(newCart)
        addToDb(product.id)
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
            <div className="cartContainer">
                <Cart cart={cart} >


                    <Link to='/order'>
                        <button className="review">
                            <span>Review</span>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </Link>

                </Cart>
            </div>
        </div>
    )
}
