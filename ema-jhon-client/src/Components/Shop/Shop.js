import React, { useEffect, useState } from 'react'
import { addToDb, getStoragItem } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product';
import { Link } from 'react-router-dom';
import useCart from '../../customHooks/useCart';

export default function Shop() {
    const [products, setProducts] = useState([])

    const [pageCount, setPageCount] = useState(0)
    const [productPerPage, setProductPerPage] = useState(10)
    const [activePage, setActivePage] = useState(0)
    const [cart, setCart] = useCart();
    useEffect(() => {
        fetch(`http://localhost/product?activePage=${activePage}&productPerPage=${productPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activePage, productPerPage])
    useEffect(() => {
        fetch('http://localhost/productCount')
            .then(res => res.json())
            .then(data => setPageCount(Math.ceil(parseInt(data.productCount) / parseInt(productPerPage))))
    }, [productPerPage])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const cartHandler = (product) => {
        const exist = cart.find(pd => product._id === pd._id)
        let newCart = [];
        if (!exist) {
            product.quantity = 1;
            newCart.push(...cart, product)
        }
        else {
            const rest = cart.filter(pd => pd._id !== product._id)
            exist.quantity = exist.quantity + 1;
            console.log(exist)
            newCart = [...rest, exist]
        }

        setCart(newCart)
        addToDb(product._id)
    }
    return (<>
        <div className='shopContainer'>
            <div className="products">
                {
                    products.map(product =>
                        <Product
                            key={product._id}
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
        <div style={{ 'textAlign': 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
            <div>
                {[...Array(pageCount).keys()].map(num => <button onClick={() => setActivePage(num)} className={activePage === num ? 'selected' : ''} style={{ margin: '0 4px' }}>{num + 1}</button>)}
            </div>
            < select onChange={e => setProductPerPage(e.target.value)}>

                <option >5 product per page</option>
                <option selected >10 product per page</option>
                <option >15 product per page</option>
                <option >20 product per page</option>
            </select>
        </div>
    </>

    )
}
