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
                  <p className="text-white rotate-90-deg font-17">LOGO</p>
                </div>
              </div>
            </div>
            <div className={styles.motoContainer}>
              <div className={styles.motoItem}>
                <div className={styles.motoImage}>
                  <img
                    className="d-block w-100 banner-img-max-width"
                    src="/buddha_new.png"
                    alt="Second slide"
                  />
                </div>
              </div>
              <div className={styles.motoItem}>
                <div className={styles.bannerTextOne}>
                  <img src="/swirlLeftt.png" width="200px" />
                  &nbsp;IIT&nbsp;
                  <img src="/swirlRight.png" width="200px" />
                </div>
                <div className={styles.bannerTextTwo}>
                  International Institute of Theravada is an inclusive bhikkhu
                  training center aiming at capacitating attahita, parahita and
                  vinayadhara Buddhist monks.
                </div>
              </div>
              {/* <div className="width-50-per">
                <img
                  className="d-block w-100 banner-img-max-width"
                  src="/buddha_new.png"
                  alt="Second slide"
                  width="698px"
                />
              </div>
              <Carousel.Caption className="caroucap width-50-per banner-text-left">
                <div className={styles.bannerTextOne}>
                  <img src="/swirlLeftt.png" width="200px" />
                  &nbsp;IIT&nbsp;
                  <img src="/swirlRight.png" width="200px" />
                </div>
                <div className={styles.bannerTextTwo}>
                  International Institute of Theravada is an inclusive bhikkhu
                  training center aiming at capacitating attahita, parahita and
                  vinayadhara Buddhist monks.
                </div>
                <button className={styles.learnMoreButton}>Learn More</button>
              </Carousel.Caption> */}
            </div>
            {/* <div className={styles.bannerOneLeft}>
              <div className={styles.iconsButton}>

                <img
                  className="d-block w-100 banner-social-icon-max-width banner-social-icon-max-height mt-10 mb-10"
                  src="/facebook-f.svg"
                  alt="facebook"
                />

                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/youtube.svg"
                  alt="youtube"
                />
              </div>
            </div> */}
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
                  <p className="text-white rotate-90-deg font-17">LOGO</p>
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
                    />
                  </div>
                  <Carousel.Caption className="caroucap pd-30 width-75-per banner-text-left">
                    <div className={styles.sliderTwoText}>
                      IIT holds online Dhamma programs during full moon days.
                      You can listen to various dhamma discourses, meditation
                      instructions in both Sinhala and English medium.
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
            {/* <div className={styles.bannerOneLeft}>
              <div className={styles.iconsButton}>
                
                <img
                  className="d-block w-100 banner-social-icon-max-width banner-social-icon-max-height mt-10 mb-10"
                  src="/facebook-f.svg"
                  alt="facebook"
                />
                
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/youtube.svg"
                  alt="youtube"
                />
              </div>
            </div> */}
            <div className={styles.bannerOneLeft}>
              <div className={styles.iconsButton2}>
                <div className="img-container">
                  {/* <img
                    className="d-block w-100 banner-social-icon-max-width-53"
                    src="/owada.svg"
                    alt="owada"
                  /> */}
                </div>
                <div className="text-container text-width-215">
                  <p className="text-white rotate-90-deg font-17">IIT</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouwrap}>
            <div className={styles.sliderThreeContainer}>
              <div className={styles.outer}>
                <div className={styles.sliderTwoInnerCont}>
                  <div className="width-25-per sliderThreeLogo">
                    <img
                      className="d-block w-100 "
                      src="/IIT-2.svg"
                      alt="Third slide"
                    />
                  </div>
                  {/* <Carousel.Caption className="caroucap pd-30 width-75-per banner-text-left"> */}
                  <Carousel.Caption className="caroucap width-75-per banner-text-left">
                    <div className={styles.sliderThreeText}>
                      <div className={styles.sliderThreeTextLine}>
                        <strong>Brown Coloured Large Wheel of Dhamma</strong>{' '}
                        indicates how the dispensation of the Buddha is spread
                        all over the world.
                      </div>
                      <div className={styles.sliderThreeTextLine}>
                        <strong>Twenty-four Sparks</strong> of the wheel
                        represent the twenty-four factors of the Noble Truths.{' '}
                      </div>
                      <div className={styles.sliderThreeTextLine}>
                        <strong>Palm-Leaf-Books</strong> which holds the wheel
                        of Dhamma indicates how the dispensation depends upon
                        studies on Dhamma and Vinaya after the passing away of
                        the Buddha.
                      </div>
                      <div className={styles.sliderThreeTextLine}>
                        <strong>The Pen and the Palm Leaf</strong> inside the
                        wheel depicts how a monk is involved in studies of
                        Dhamma and Vinaya – pariyatti sāsana.
                      </div>
                      <div className={styles.sliderThreeTextLine}>
                        <strong>The Meditative Figure</strong> shows how a monk
                        is involved in developing spiritual qualities –
                        paṭipatti sāsana.
                      </div>
                      <div className={styles.sliderThreeTextLine}>
                        <strong>The Pagoda</strong> depicts how a monk who
                        involves in both scriptural studies and spiritual
                        practice becomes a noble being who deserves to be
                        venerated having a pagoda built for him.{' '}
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>
                <div className={styles.outerTextThree}>
                  <div className="text-container text-width-215 height-100-per">
                    <p className="text-white rotate-90-deg font-17">LOGO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bannerOneLeft}>
              {/* <div className={styles.iconsButton}>
                
                <img
                  className="d-block w-100 banner-social-icon-max-width banner-social-icon-max-height mt-10 mb-10"
                  src="/facebook-f.svg"
                  alt="facebook"
                />
                
                <img
                  className="d-block w-100 banner-social-icon-max-width mt-10 mb-10"
                  src="/youtube.svg"
                  alt="youtube"
                />
              </div> */}
              <div className={styles.iconsButton2}>
                <div className="img-container">
                  {/* <img
                    className="d-block w-100 banner-social-icon-max-width-53"
                    src="/owada.svg"
                    alt="owada"
                  /> */}
                </div>
                <div className="text-container text-width-215">
                  <p className="text-white rotate-90-deg font-17">IIT</p>
                </div>
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
