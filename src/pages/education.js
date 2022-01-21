import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import EducationComponent from '../components/education/EducationComponent';
import Slider from '../components/slider/slider';
import OurFocusCardComponent from '../components/ourFocusCardComponent/ourFocusCardComponent';
import cardInfo from '../data/educationDhammaList.json';
import styles from '../components/aboutUsComponent/aboutUsComponent.module.css';
import React, { useRef } from 'react';

export default function Education() {
  // Create an array for card components to view in
  // card slider.
  const cards = cardInfo.map((data, index) => {
    return <OurFocusCardComponent key={index} cardData={data} />;
  });

    // Reference to the Slider component
    const sliderRef = useRef();

    const slideLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.slideLeft();
      }
    };
  
    const slideRight = () => {
      if (sliderRef.current) {
        sliderRef.current.slideRight();
      }
    };
  

  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>Education</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="international institute of theravada"
        />
      </Head>

      <div className="navbarCarouselWrapper contact">
        <Header />
      </div>

      <MainLayoutSection
        title="Education"
        description="Comprehensive studies of Buddhist scriptures pave the foundation for the prolongation of the Buddha Sāsana (dispensation)."
        photo="/EducationSangha.png"
        backgroundImg="url(/Ellipse-6.svg)"
      />

      <EducationComponent />

      <div className={styles.rootContainer}>
        <div className={styles.ourFocusContainer}>
          <div className={styles.ourFocusInnerContainer}>
            <div className={styles.ourFocusHeader}></div>
            <div className={styles.ourFocusSubHeader}>
              <div className={styles.subHeaderText}>Dhamma Lectures and Sermons</div>
              <div className={styles.sliderButtonContainer}>
                <div className={styles.sliderButton} onClick={slideRight}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-left ${styles.buttonLeftImage}`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </div>
                <div className={styles.sliderButton} onClick={slideLeft}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-right ${styles.buttonRightImage}`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.focusCards}>
            <Slider cardInfo={cards} ref={sliderRef} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    },
  };
}
