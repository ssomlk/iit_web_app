import React from 'react';
import { Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer';
import styles from './Toast.module.css';

function CustomToast({ show, setShow, autohide, delay, variant, alertTitle, timeDuration , alertDesc }) {  
    return(
        <ToastContainer position="bottom-end">
            <Toast onClose={() => setShow(false)} show={show} delay={delay} bg={variant} autohide={autohide}>
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                />
                <strong className="me-auto">{alertTitle}</strong>
                {
                    timeDuration != "" ? <small>{timeDuration}</small> : null
                }
            </Toast.Header>
            <Toast.Body className={variant === 'Dark' && 'text-white'}>
                { alertDesc }
            </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
    
export default CustomToast;