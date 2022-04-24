import { useEffect, useState } from "react";
import { getStoragItem } from "../utilities/fakedb";

export default function useCart(products) {
    const [cart, setCart] = useState([]);
    useEffect(() => {

        // getting the stored cart in localstorage using function in fakedb
        const storedCart = getStoragItem();
        // 
        const savedCart = [];
        for (const _id in storedCart) {
            const addedProduct = products.find(pd => pd._id === _id);
            if (addedProduct) {
                addedProduct.quantity = storedCart[_id];
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    return [cart, setCart]
}