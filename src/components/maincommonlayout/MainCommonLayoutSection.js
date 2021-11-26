import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./MainLayoutSection.module.css";
import Carousel from 'react-bootstrap/Carousel';

function MainCommonLayoutSection({ title, description, photo, backgroundImg }) {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.headerBackground} style={{backgroundImage:backgroundImg}}>
        <div className={styles.carouwrap}>
          <div className={styles.motoContainer}>
            <div className='width-50-per'>
              <img
                className="d-block w-100 banner-img-max-width-about"
                src={photo}
                alt={photo}
                width="644px"
              />
            </div>
            <Carousel.Caption className='caroucap width-50-per banner-text-left-about-pd'>
              <div className={styles.bannerTextOne}>{title}</div>
              <div className={styles.bannerTextTwo}>{description}</div>
            </Carousel.Caption>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCommonLayoutSection;

