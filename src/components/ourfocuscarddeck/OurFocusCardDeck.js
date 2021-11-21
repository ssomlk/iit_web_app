import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, CardDeck } from "react-bootstrap";
import cardInfo from '../../data/ourFocusData.json'
import styles from './OurFocusCardDeck.module.css';
import { BsArrowRightCircleFill, BsArrowRightCircle, BsArrowRight } from "react-icons/bs";

const OurFocusCardDeck = () => {
  const renderCard = (card, index) => {
    return (
      <Col key={index}>
        <Card className={styles.cardComponentOurFocus} key={index}>
          <Card.Body style={{ background: card.color }} className={styles.cardBodyOurFocus}>
            <Card.Img variant="top" src={card.image} className={styles.cardImageOurFocus} />
              <Card.Title style={{ color: card.titleColor }} className={styles.cardTitleOurFocus}>
              {card.title}
            </Card.Title>
            <Card.Text style={{ color: card.titleColor }} className={styles.cardTextOurFocus}>{card.body}</Card.Text>
          </Card.Body>
        </Card>
       </Col> 
    );
  };

  return (
      <Container className={styles.ourFocusMainArea}>
      <div className={styles.mainTitleOurFocus}>Our Focus</div>
      <div className={styles.subTitleOurFocus}>Academic Courses and Training Programs will be focused on</div>
      <div className={styles.arrowContainerOurFocus}><a href="#">  <BsArrowRight size={20} color="white" className={styles.cardArrow} ></BsArrowRight >  </a></div>

    <Container className={styles.deckContainerOurFocus}>
      <Row xs={1} sm={2} md={4} lg={5}>
        {cardInfo.map(renderCard)}
      </Row>
       </Container>
       
       </Container>
       );
};
export default OurFocusCardDeck;
