import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CustomCarousel.module.css';
import $ from 'jquery';

function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function normalizeSlideHeights() {
    $('.carousel').each(function () {
      var items = $('.carousel-item', this);
      // reset the height
      items.css('height', 'auto');
      // set the height
      var maxHeight = Math.max.apply(
        null,
        items
          .map(function () {
            return $(this).outerHeight();
          })
          .get()
      );
      items.css('height', maxHeight + 'px');
    });
  }

  useEffect(() => {
    $(window).on('load resize orientationchange', normalizeSlideHeights);
    normalizeSlideHeights();
    return () => {
      $(window).off('load resize orientationchange');
    };
  }, []);

  return (
    <div className={styles.customCarouselWrapper}>
      <div className={styles.customEllipse}></div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className={styles.carouwrap}>
            <div className={styles.bannerOneRight}>
              <div className={styles.iconsButton2}>
                <div className="img-container">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-31"
                    src="/temple.svg"
                    alt="owada"
                  />
                </div>
                <div className="text-container text-width-215">
                  <p className="text-white rotate-90-deg font-17">POYA DAY</p>
                </div>
              </div>
              <div className={styles.iconsButton2}>
                <div className="img-container">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-53"
                    src="/owada.svg"
                    alt="owada"
                  />
                </div>
                <div className="text-container text-width-215">
                  <p className="text-white rotate-90-deg font-17">
                    MORNING OWADA
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.motoContainer}>
              <div className="width-50-per">
                <img
                  className="d-block w-100 banner-img-max-width"
                  src="/buddha.svg"
                  alt="Second slide"
                  width="698px"
                />
              </div>
              <Carousel.Caption className="caroucap width-50-per banner-text-left">
                <div className={styles.bannerTextOne}>
                  Sasanassa Pariyatti Mullam
                </div>
                <div className={styles.bannerTextTwo}>
                  A Bhikkhu Training Center established with the objective of
                  producing bhikkhu with high qualities.
                </div>
                <button className={styles.learnMoreButton}>Learn More</button>
              </Carousel.Caption>
            </div>
            <div className={styles.bannerOneLeft}>
              <div className={styles.iconsButton}>
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/twitter.svg"
                  alt="twitter"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width banner-social-icon-max-height mt-10 mb-10"
                  src="/facebook-f.svg"
                  alt="facebook"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/instagram.svg"
                  alt="instagram"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/youtube.svg"
                  alt="youtube"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouwrap}>
            <div className={styles.bannerOneRight}>
              <div className={styles.iconsButton2}>
                <div className="img-container">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-53"
                    src="/owada.svg"
                    alt="owada"
                  />
                </div>
                <div className="text-container text-width-215">
                  <p className="text-white rotate-90-deg font-17">
                    MORNING OWADA
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.sliderTwoContainer}>
              <div className={styles.outer}>
                <div className={styles.sliderTwoInnerCont}>
                  <div className="width-25-per sliderTwoTemple">
                    <img
                      className="d-block w-100 banner-img-max-width"
                      src="/temple.svg"
                      alt="Second slide"
                      width="698px"
                    />
                  </div>
                  <Carousel.Caption className="caroucap pd-30 width-75-per banner-text-left">
                    <div className={styles.sliderTwoText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dictum molestie magna. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos
                      himenaeos. Nunc et tellus nec est consectetur feugiat
                      tincidunt interdum nulla. Mauris a gravida metus, varius
                      sagittis nunc. Curabitur viverra condimentum orci et
                      porttitor.
                    </div>
                  </Carousel.Caption>
                </div>
                <div className={styles.outerTextThree}>
                  <div className="text-container text-width-121 height-100-per">
                    <p className="text-white rotate-90-deg font-17">POYA DAY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bannerOneLeft}>
              <div className={styles.iconsButton}>
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/twitter.svg"
                  alt="twitter"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width banner-social-icon-max-height mt-10 mb-10"
                  src="/facebook-f.svg"
                  alt="facebook"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/instagram.svg"
                  alt="instagram"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/youtube.svg"
                  alt="youtube"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouwrap}>
            <div className={styles.sliderTwoContainer}>
              <div className={styles.outer}>
                <div className={styles.sliderTwoInnerCont}>
                  <div className="width-25-per sliderTwoTemple">
                    <img
                      className="d-block w-100 banner-img-max-width"
                      src="/owada.svg"
                      alt="Second slide"
                      width="698px"
                    />
                  </div>
                  <Carousel.Caption className="caroucap pd-30 width-75-per banner-text-left">
                    <div className={styles.sliderTwoText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dictum molestie magna. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos
                      himenaeos. Nunc et tellus nec est consectetur feugiat
                      tincidunt interdum nulla. Mauris a gravida metus, varius
                      sagittis nunc. Curabitur viverra condimentum orci et
                      porttitor.
                    </div>
                  </Carousel.Caption>
                </div>
                <div className={styles.outerTextThree}>
                  <div className="text-container text-width-215 height-100-per">
                    <p className="text-white rotate-90-deg font-17">
                      MORNING OWADA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bannerOneLeft}>
              <div className={styles.iconsButton}>
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/twitter.svg"
                  alt="twitter"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width banner-social-icon-max-height mt-10 mb-10"
                  src="/facebook-f.svg"
                  alt="facebook"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/instagram.svg"
                  alt="instagram"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/youtube.svg"
                  alt="youtube"
                />
              </div>
              <div className={styles.iconsButton2}>
                <div className="img-container">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-53"
                    src="/temple.svg"
                    alt="owada"
                  />
                </div>
                <div className="text-container text-width-215">
                  <p className="text-white rotate-90-deg font-17">POYA DAY</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
