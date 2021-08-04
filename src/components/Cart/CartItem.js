import styles from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <li key={props.key} className={styles['cart-items']}>
            <div className={styles['item-info']}>
                <img src={props.image} alt={props.name} />
                <div className={styles['item-details']}>
                    <h3>{props.name}</h3>
                    <span>${props.price.toFixed(2)}</span>
                </div>

            </div>
            <div className={styles.actions}>
                <button onClick={props.onRemove}>-</button>
                <span className={styles.amount}>{props.amount}</span>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem;