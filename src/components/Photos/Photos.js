import { Carousel } from "react-bootstrap";
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Modal from "../../UI/Modal/Modal";
import classes from './Photos.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

const Photos = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <Button className={classes['close-btn']} onClick={props.onClose}>
                <Close /> Close
            </Button>
            <Carousel>
                {props.images.map(image => <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`/images/${image}.jpg`}
                        alt={image}
                    />
                </Carousel.Item>)}
            </Carousel>
        </Modal>
    );
};

export default Photos;