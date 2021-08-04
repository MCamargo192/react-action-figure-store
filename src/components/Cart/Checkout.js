import { useRef, useState } from 'react';
import { Close, Done } from '@material-ui/icons';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const isEmpty = (input) => input.trim() === '';
    const isPostalCodeValid = input => input.match(/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]( |-)?[0-9][A-Z][0-9]$/);

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const validName = !isEmpty(enteredName);
        const validStreet = !isEmpty(enteredStreet);
        const validPostalCode = isPostalCodeValid(enteredPostalCode);
        const validCity = !isEmpty(enteredCity);

        setFormValidity({
            name: validName,
            street: validStreet,
            postalCode: validPostalCode,
            city: validCity
        });

        const validForm = validName && validStreet && validPostalCode && validCity;

        if(validForm) {
            props.onConfirm();
        }

    }
    return (
        <form onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formValidity.name && <p className={classes.message}>Enter a valid name.</p>}
            </div>
            <div className={`${classes.control} ${formValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formValidity.street && <p>Enter a valid street.</p>}
            </div>
            <div className={`${classes.control} ${formValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!formValidity.postalCode && <p>Enter a canadian postal code.</p>}
            </div>
            <div className={`${classes.control} ${formValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formValidity.city && <p>Enter a valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}><Close /> Cancel</button>
                <button ><Done/> Confirm</button>
            </div>
        </form>
    )
};

export default Checkout;