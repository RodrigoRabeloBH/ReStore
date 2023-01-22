import { useState, useEffect } from "react";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";

const Catalog = () => {
    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then((data: Product[]) => setProduct(data));
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default Catalog;