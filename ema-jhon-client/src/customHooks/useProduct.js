import { useEffect, useState } from "react"

export default function useProduct() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}
