import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./MainLayoutSection.module.css";
import Carousel from 'react-bootstrap/Carousel';

function MainCommonLayoutSection({title, description, photo}){
  return(
    <div className={styles.customCarouselWrapper}>
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
  );
}

export default MainCommonLayoutSection;

// const MainCommonLayoutSection = () => {
//   const renderMainLayoutSection = () => {
//     return (
//     <div className={styles.customAboutUsEllipse}>
//       <div className="container">
//         <div className="row">
//             <div className="col">
//               <div className={styles.mainTitle}>About Us</div>
//               <div className={styles.mainBody}>
//                 Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings.</div>
//               </div>
//             <div className="col">
//               <img className={styles.mainImg} src="/monk-hike-deep-forest-reflection-with-lake-buddha-religion-concept.png"/>
//             </div>
//         </div>
//       </div>
//     </div>
//     );
//   };

//   return (
//     <Container className={styles.customAboutUsCarouselWrapper}>
//       {renderMainLayoutSection()}
//     </Container>
//   );
// };
// export default MainCommonLayoutSection;

