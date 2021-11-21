import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, CardDeck } from "react-bootstrap";
import cardInfo from "../../data/cardsData.json";
import styles from "./CardDeck.module.css";
import { BsArrowRightCircleFill, BsArrowRightCircle, BsArrowRight } from "react-icons/bs";

const CardDeckComponent = () => {
  const renderCard = (card, index) => {
    return (
      <Col key={index}>
        <Card className={styles.cardComponent} key={index}>
          <Card.Body style={{ background: card.color }} className={styles.cardBody}>
          <div className={styles.arrowContainer}><a href={card.link}>  <BsArrowRight size={20} color="white" className={styles.cardArrow} ></BsArrowRight >  </a></div>
            <Card.Img variant="top" src={card.image} className={styles.cardImage} />
              <Card.Title style={{ color: card.titleColor }} className={styles.cardTitle}>
              {card.title}
            </Card.Title>
            <Card.Text style={{ color: card.titleColor }} className={styles.cardText}>{card.description}</Card.Text>
          </Card.Body>
        </Card>
       </Col> 
    );
  };

  return (
    <Container className={styles.deckContainer}>
      <Row xs={1} sm={2} md={2} lg={4}>
        {cardInfo.map(renderCard)}
      </Row>
       </Container>

       );
};
export default CardDeckComponent;
