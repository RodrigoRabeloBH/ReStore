import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";

const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then((products) => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loading message="Loading products ..." />
    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default Catalog;