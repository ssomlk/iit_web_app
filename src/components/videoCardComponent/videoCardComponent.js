import React from 'react';
import styles from './videoCardComponent.module.css';

function VideoCardComponent(props) {
  function goToYoutubePlaylist(linkToYourtube) {
    window.open(linkToYourtube, '_blank');
  }

  return (
    <div
      className={styles.mainContainer}
      onClick={() => goToYoutubePlaylist(props.cardData.link)}
      style={{ cursor: 'pointer' }}
    >
      <div
        style={{
          backgroundImage: `url('${props.cardData.image}')`,
        }}
        className={styles.ourFocusCardContainer}
      >
        <div className={styles.colorOverlay}></div>
      </div>
    </div>
  );
}

export default VideoCardComponent;
