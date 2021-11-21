import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Pagination } from "react-bootstrap";
import newsAndEvents from '../../data/newsAndEventsData.json'
import styles from './NewsAndEvents.module.css';

const NewsAndEventsComponent = () => {
  const renderCard = (card, index) => {
    return (
        <Card className={styles.cardBody} key={index}>

      {(card.type === "News") ? (
        <p className={  styles.typeNews } > {card.type}</p> 
      ) : (
        <p className={  styles.typeEvent } > {card.type}</p> 
      )} 
            <Card.Subtitle className="mb-2 text-muted">{card.date}</Card.Subtitle>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text className="mb-2 text-muted">
              {card.description}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
        </Card>
    );
  };

  return (
      <div className={styles.mainDiv}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={10}>   <p className={styles.mainText}> News and Events</p> </Col>
            <Col xs={6} sm={6} md={6} lg={2}>   <Pagination className={styles.mainText}>
            <Pagination.Prev />
            <Pagination.Next />
            </Pagination>
            </Col>
          </Row>
          <Container>
            <Row xs={1} sm={2} md={4} lg={4}>
            {newsAndEvents.map(renderCard)}
            </Row>
          </Container>
        </div>
       );
};
export default NewsAndEventsComponent;
