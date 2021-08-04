import { useContext, useState, Fragment } from "react";
import { Button } from '@material-ui/core';
import { Close, LocalMall, LocalShipping, Beenhere } from '@material-ui/icons';

import CartContext from '../store/cart-context';
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Modal from "../../UI/Modal/Modal";

import styles from './Cart.module.css';

const Cart = (props) => {
    const cartCxt = useContext(CartContext);
    const { items } = cartCxt;
    const [isCheckout, setIsCheckout] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const orderHandler = (event) => { setIsCheckout(true); }
    const cartItemRemoveHandler = (id) => cartCxt.removeItem(id);
    const cartItemAddHandler = (item) => cartCxt.addItem({ ...item, amount: 1 });
    const submitOrderHandler = () => {
        setSubmitted(true);
        cartCxt.clearCart();
    }

    let content = (
        <Fragment>
            <p className={styles.empty}><LocalMall fontSize='inherit' /> Empty Cart</p>
            <Button className={styles['close-btn']} onClick={props.onClose}>
                <Close fontSize='inherit' /> Close
            </Button>
        </Fragment>
    );

    const cartActions = (
        <div className={styles.actions}>
            <Button className={styles['close-btn']} onClick={props.onClose}>
                <Close fontSize='inherit' /> Close
            </Button>
            <Button className={styles['close-btn']} onClick={orderHandler}>
                <LocalShipping fontSize='inherit' /> Order
            </Button>
        </div>
    );

    if (items.length > 0) {
        content = (
            <div >
                <p className={styles.title}>Your Cart</p>
                <ul className={styles.cart}>
                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            image={`/images/${item.image}.jpg`}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                            onRemove={cartItemRemoveHandler.bind(null, item.id)}
                            onAdd={cartItemAddHandler.bind(null, item)}
                        />
                    ))}
                </ul>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>${cartCxt.totalAmount.toFixed(2)}</span>
                </div>
                {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
                {!isCheckout && cartActions}
            </div>
        )
    }    

    const cartContent = (
        <Fragment>
            {content}
        </Fragment>
    )

    const submittedCart = (
        <Fragment>
            <p className={styles.empty}><Beenhere fontSize='inherit' /> Your order was placed</p>
            <Button className={styles['close-btn']} onClick={props.onClose}>
                <Close fontSize='inherit' /> Close
            </Button>
        </Fragment>
    )

    return (
        <Modal onClose={props.onClose}>
            {!submitted && cartContent}
            {submitted && submittedCart}
        </Modal>
    )
};

export default Cart;