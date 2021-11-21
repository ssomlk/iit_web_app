import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./MainLayoutSection.module.css";

const MainLayoutSection = () => {
  const renderMainLayoutSection = () => {
    return (
    <div className={styles.customAboutUsEllipse}>
<div className="container">
<div className="row">
    <div className="col">
    <div className={styles.mainTitle}>About Us</div>
    <div className={styles.mainBody}>Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings.</div>
    </div>
    <div className="col">
    <img className={styles.mainImg} src="/monk-hike-deep-forest-reflection-with-lake-buddha-religion-concept.png"/>
    </div>
</div>
   </div>
    </div>
    );
  };

  return (
    <Container className={styles.customAboutUsCarouselWrapper}>
    {renderMainLayoutSection()}
       </Container>
       );
};
export default MainLayoutSection;

