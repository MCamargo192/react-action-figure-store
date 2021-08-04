import { AddShoppingCart } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Input from '../../../UI/Input/Input';
import classes from './ProductForm.module.css';

const ProductForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddToCart(+event.target[0].value);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <Button type='submit' className={classes['submit-btn']}>
                <AddShoppingCart /> Add to Cart
            </Button>
        </form>
    );
}

export default ProductForm;