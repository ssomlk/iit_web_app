import React from 'react';
import { Modal, Alert } from 'react-bootstrap';
import styles from './AlertBox.module.css';

function AlertBox({ show, handleClose, setShow, varient, alertTitle, alertDesc }) {  
    return(
        <Modal show={show} onHide={handleClose}>
            <Alert className={styles.customAlert} variant={ varient } onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{ alertTitle }</Alert.Heading>
                <p>{ alertDesc }</p>
            </Alert>
        </Modal>
    );
}
    
export default AlertBox;