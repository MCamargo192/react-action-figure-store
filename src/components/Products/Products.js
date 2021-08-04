import { useCallback, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductItem from './ProductItem/ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = useCallback(() => {
        setProducts(props.products);
        setLoading(false);
    }, [props]);

    useEffect(() => { getProducts() }, [getProducts]);

    let content = <p className={classes.message}>No item available.</p>

    if (products.length > 0) {
        content = (
            products.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    images={product.images}
                    tags={product.tags}
                    onClose={props.onClose}
                />
            ))
        )
    }

    if (loading)
        content = <div className={classes.message}><Spinner animation="border" variant="danger" /> Loading...</div>;

    return (
        <section className={classes.container}>
            {content}
        </section>
    );
}

export default Products;