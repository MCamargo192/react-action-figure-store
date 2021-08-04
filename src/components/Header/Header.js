import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import navLogo from '../../assets/logo.png';
import classes from './Header.module.css';

const Header = (props) => (
    <Fragment>
        <header className={classes.header}>
            <img className={classes.logo} src={navLogo} alt="We're Otakus Logo" />
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
    </Fragment>
);

export default Header;