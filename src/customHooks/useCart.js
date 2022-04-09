import { useEffect, useState } from "react";
import { getStoragItem } from "../utilities/fakedb";

export default function useCart(products) {
    const [cart, setCart] = useState([]);
    useEffect(() => {

        // getting the stored cart in localstorage using function in fakedb
        const storedCart = getStoragItem();
        // 
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(pd => pd.id === id);
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    return [cart, setCart]
}