import React from 'react';
import styles from './videoCardComponent.module.css';

function VideoCardComponent(props) {
  return (
    <div className={styles.mainContainer}>
      <div
        style={{
          backgroundImage: `url('${props.cardData.link}')`,
        }}
        className={styles.ourFocusCardContainer}
      >
        <div className={styles.colorOverlay}></div>
      </div>
    </div>
  );
}

export default VideoCardComponent;
