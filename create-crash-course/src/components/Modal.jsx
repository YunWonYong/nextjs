import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

const Modal = (prop) => {
    const navigate = useNavigate();
    const closeHandler = () => {
        navigate("/");
    };
    return (
        <>
            <div 
                className={ classes.backdrop }
                onClick={ closeHandler }
            />
            <dialog
                className={ classes.modal }
                open={ true }
            >
                {
                    prop?.children
                }
            </dialog>
        </>
    );
};

export default Modal;