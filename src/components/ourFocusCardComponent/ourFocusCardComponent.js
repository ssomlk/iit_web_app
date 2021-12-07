import React from 'react';
import styles from './ourFocusCardComponent.module.css';

function OurFocusCardComponent(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.ourFocusCardContainer}>
                <div className={styles.ourFocusImageContainer}>
                    <img src={props.cardData.image} className={styles.ourFocusImage} />
                </div>
                <div className={styles.ourFocusHeader}>
                    {props.cardData.title}
                </div>
                <div className={styles.ourFocusDetails}>
                    {props.cardData.body}
                </div>
            </div>
        </div>
    );
}

export default OurFocusCardComponent;