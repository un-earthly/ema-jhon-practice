import React from 'react'
import useProduct from '../../customHooks/useProduct'
import useCart from '../../customHooks/useCart'
import Product from '../Cart/Product'
import { removeFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

export default function Order() {
  const [products, setProducts] = useProduct()
  const [cart, setCart] = useCart(products)

  const deleteHandler = product => {
    console.log(product)

    const rest = cart.filter(pd => pd.id !== product.id)

    setCart(rest)
    removeFromDb(product.id)
  }
  return (
    <div>
      <div className="order__summary">
        <div className="sum__body">
          <div className="cart__porducts">
            {
              cart.map(pd => {
                return <Product deleteHandler={deleteHandler} product={pd} />
              })
            }
          </div>

          <Cart cart={cart} >

            <Link to='/inventory'>
              <button className="review">
                <span>Proceed Checkout</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </Link>

          </Cart>
        </div>
      </div>
    </div >
  )
}
