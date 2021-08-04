import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ImageSearch } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import ProductForm from './ProductForm';
import CartContext from '../../store/cart-context';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.images[0],
            amount
        })
    }
    const openPhotosHandler = () => {
        props.onClose(props.images);
    }
    return (
        <Card key={props.id} className={classes.card}>
            <Button onClick={openPhotosHandler}>
                <Card.Img src={`/images/${props.images[0]}.jpg`} alt={props.name} />
                <div className={classes['card-overlay']}>
                    <ImageSearch className={classes['card-overlay-text']} />
                </div>
            </Button>
            <Card.Body className={classes['card-info']}>
                <Card.Title className={classes['card-title']}>{props.name}</Card.Title>
                <Card.Subtitle className={classes['card-subtitle']}>{props.description}</Card.Subtitle>
                <div className={classes['card-details']}>
                    <div className={classes['card-tags']}>
                        {props.tags.map(tag => <Card.Text className={classes['card-tags-text']} key={Math.random()}>#{tag}</Card.Text>)}
                    </div>
                    <p className={classes['card-price']}>${props.price.toFixed(2)}</p>
                </div>
                <ProductForm onAddToCart={addToCartHandler}/>
            </Card.Body>
        </Card>
    )

};

export default ProductItem;