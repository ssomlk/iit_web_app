import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Card, CardDeck } from 'react-bootstrap';
import cardInfo from '../../data/cardsData.json';
import styles from './CardDeck.module.css';
import {
  BsArrowRightCircleFill,
  BsArrowRightCircle,
  BsArrowRight,
} from 'react-icons/bs';
import $ from 'jquery';

const CardDeckComponent = () => {
  function normalizeCardHeights() {
    $('.card-container').each(function () {
      var items = $('.card-dynamic-height', this);
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
    $(window).on('load resize orientationchange', normalizeCardHeights);
    normalizeCardHeights();
    return () => {
      $(window).off('load resize orientationchange');
    };
  }, []);

  const renderCard = (card, index) => {
    return (
      <Col key={index}>
        <Card className={styles.cardComponent} key={index}>
          <Card.Body
            style={{ background: card.color }}
            className={`card-dynamic-height ${styles.cardBody}`}
          >
            <div className={styles.arrowContainer}>
              <a href={card.link}>
                {' '}
                <BsArrowRight
                  size={20}
                  color="white"
                  className={styles.cardArrow}
                ></BsArrowRight>{' '}
              </a>
            </div>
            <Card.Img
              variant="top"
              src={card.image}
              className={styles.cardImage}
            />
            <Card.Title
              style={{ color: card.titleColor }}
              className={styles.cardTitle}
            >
              {card.title}
            </Card.Title>
            <Card.Text
              style={{ color: card.titleColor }}
              className={styles.cardText}
            >
              {card.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container className={`card-container ${styles.deckContainer}`}>
      <div className={styles.deckHeader}>
        <p className={styles.deckHeaderIntro}>
          International Institute of Theravada is an inclusive bhikkhu training
          center aiming at capacitating attahita, parahita and vinayadhara
          Buddhist monks.
        </p>
      </div>
      <Row xs={1} sm={2} md={2} lg={4}>
        {cardInfo.map(renderCard)}
      </Row>
    </Container>
  );
};
export default CardDeckComponent;
