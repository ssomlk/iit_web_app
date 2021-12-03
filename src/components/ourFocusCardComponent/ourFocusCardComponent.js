import React from 'react';
import styles from './ourFocusCardComponent.module.css';

function OurFocusCardComponent() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.ourFocusCardContainer}>
                <div className={styles.ourFocusImageContainer}>
                    <img src="./learning.png" className={styles.ourFocusImage} />
                </div>
                <div className={styles.ourFocusHeader}>
                    Learning
                </div>
                <div className={styles.ourFocusDetails}>
                    The original teachings of the Buddha: the Dhamma and Vinaya preserved under the Theravāda tradition enshrined in the Pāli Canon.
                </div>
            </div>
        </div>
    );
}

export default OurFocusCardComponent;