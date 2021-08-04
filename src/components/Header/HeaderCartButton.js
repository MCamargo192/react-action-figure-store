import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBntIsHighlighted] = useState(false);
    const cartCxt = useContext(CartContext);
    const { items } = cartCxt;

    const numberOfCartItems = items.reduce((currNumber, item) => (currNumber + item.amount), 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBntIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setBntIsHighlighted(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [items]);

    return (
        <div>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span >Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </div>
    );
}

export default HeaderCartButton;