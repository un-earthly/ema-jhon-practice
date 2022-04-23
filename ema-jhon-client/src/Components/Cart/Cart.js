import React from 'react'
import { deleteShoppingCart } from '../../utilities/fakedb';

export default function Cart(props) {
    let { cart } = props;
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for (const pd of cart) {
        total = total + pd.price * pd.quantity;
        shipping = shipping + pd.shipping;
        quantity = quantity + pd.quantity
    }
    let tax = total / 10;

    return (

        // <div className="cart">
        //     <h5 style={{ textAlign: 'center', fontSize: '25px' }}>Order Summery</h5>
        //     <div className="cartInfo">
        //         <p>Items In Cart:{quantity}</p>
        //         <p>Total Price:${total}</p>
        //         <p>Tax:${tax}</p>
        //         <p>Shipping:${shipping}</p>
        //         <p style={{
        //             fontSize: '21px',
        //             color: '#0E161A'
        //         }}>Grand Total:${total + tax + shipping}
        //         </p>
        //     </div>
        //     <div className="cartBtn">

        //         <button
        //             onClick={deleteShoppingCart}
        //             className="clear">
        //             <span style={{ marginRight: '5px' }}>Clear Cart</span>
        //             <i className="bi bi-trash"></i>
        //         </button>
        //         <button className="review">
        //             {props.children}
        //             <i className="bi bi-arrow-right"></i>
        //         </button>
        //     </div>
        // </div>
        <div className="cart">
            <div className="sum">
                <h1>Order Summary</h1>
                <p>Items In Cart:{quantity}</p>
                <p>Total Price:${total}</p>
                <p>Tax:${tax}</p>
                <p>Shipping:${shipping}</p>
                <p><strong>Grand Total : ${total + tax + shipping}</strong></p>
                <div className="buttons">
                    <button
                        onClick={deleteShoppingCart}
                        className="clear">
                        <span style={{ marginRight: '5px' }}>Clear Cart</span>
                        <i className="bi bi-trash"></i>
                    </button>


                    {/* <button className="review"> */}
                    {props.children}
                    {/* </button> */}
                </div>

            </div>
        </div>
    )
}
