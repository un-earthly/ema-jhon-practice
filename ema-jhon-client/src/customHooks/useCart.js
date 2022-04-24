import { useEffect, useState } from "react";
import { getStoragItem } from "../utilities/fakedb";

export default function useCart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {

        // getting the stored cart in localstorage using function in fakedb
        const storedCart = getStoragItem();
        const savedCart = [];

        const keys = Object.keys(storedCart)

        fetch('http://localhost/productsById', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {

                for (const _id in storedCart) {
                    const addedProduct = products.find(pd => pd._id === _id);
                    if (addedProduct) {
                        addedProduct.quantity = storedCart[_id];
                        savedCart.push(addedProduct)
                    }
                }
                setCart(savedCart)
            })

    }, [])

    return [cart, setCart]
}


